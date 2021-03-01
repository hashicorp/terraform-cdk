/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Mostly copied from
// https://github.com/ts-terraform/ts-terraform


import crypto from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'
import {TextDecoder, TextEncoder} from 'util'

function asMemory(val: WebAssembly.ExportValue) {
  if (val instanceof WebAssembly.Memory) {
    return val
  }
  throw new Error('Export received from WASM was not a Memory object')
}

interface Event {
  id: number
  this: Go
  args: unknown[]
  result?: unknown
}

const performance = {
  now() {
    const [sec, nsec] = process.hrtime()
    return sec * 1000 + nsec / 1000000
  },
}

// End of polyfills for common API.

const encoder = new TextEncoder()
const decoder = new TextDecoder('utf-8')

const timeOrigin = Date.now() - performance.now()

export class Go {
  _inst: WebAssembly.Instance = (null as any) as WebAssembly.Instance // intentionally breaking type safety
  _values: unknown[] = []
  mem: DataView = new DataView(new ArrayBuffer(0))
  exited = false
  _ids = new Map()
  _idPool: unknown[] = []

  argv = ['js']
  env: Record<string, string> = {}
  _resolveExitPromise: () => void = () => {}
  _exitPromise = new Promise((resolve) => {
    // @ts-ignore
    this._resolveExitPromise = resolve
  })
  _pendingEvent: Event | null = null
  _scheduledTimeouts = new Map()
  _nextCallbackTimeoutID = 1

  _goRefCounts: number[] = []

  exit = (code: number) => {
    if (code !== 0) {
      console.warn('exit code:', code)
    }
  }

  importObject = {
    go: {
      // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
      // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
      // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
      // This changes the SP, thus we have to update the SP used by the imported function.

      // func wasmExit(code int32)
      'runtime.wasmExit': (sp: number) => {
        const code = this.mem.getInt32(sp + 8, true)
        this.exited = true
        // @ts-ignore
        delete this._inst
        // @ts-ignore
        delete this._values
        // @ts-ignore
        delete this._goRefCounts
        // @ts-ignore
        delete this._ids
        // @ts-ignore
        delete this._idPool
        this.exit(code)
      },

      // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
      'runtime.wasmWrite': (sp: number) => {
        const fd = this._getInt64(sp + 8)
        const p = this._getInt64(sp + 16)
        const n = this.mem.getInt32(sp + 24, true)
        fs.writeSync(fd, new Uint8Array(asMemory(this._inst.exports.mem).buffer, p, n))
      },

      // func resetMemoryDataView()
      'runtime.resetMemoryDataView': (_sp: number) => {
        this.mem = new DataView(asMemory(this._inst.exports.mem).buffer)
      },

      // func nanotime1() int64
      'runtime.nanotime1': (sp: number) => {
        this._setInt64(sp + 8, (timeOrigin + performance.now()) * 1000000)
      },

      // func walltime1() (sec int64, nsec int32)
      'runtime.walltime1': (sp: number) => {
        const msec = new Date().getTime()
        this._setInt64(sp + 8, msec / 1000)
        this.mem.setInt32(sp + 16, (msec % 1000) * 1000000, true)
      },

      // func scheduleTimeoutEvent(delay int64) int32
      'runtime.scheduleTimeoutEvent': (sp: number) => {
        const id = this._nextCallbackTimeoutID
        this._nextCallbackTimeoutID++
        this._scheduledTimeouts.set(
          id,
          setTimeout(
            () => {
              this._resume()
              while (this._scheduledTimeouts.has(id)) {
                // for some reason Go failed to register the timeout event, log and try again
                // (temporary workaround for https://github.com/golang/go/issues/28975)
                console.warn('scheduleTimeoutEvent: missed timeout event')
                this._resume()
              }
            },
            this._getInt64(sp + 8) + 1, // setTimeout has been seen to fire up to 1 millisecond early
          ),
        )
        this.mem.setInt32(sp + 16, id, true)
      },

      // func clearTimeoutEvent(id int32)
      'runtime.clearTimeoutEvent': (sp: number) => {
        const id = this.mem.getInt32(sp + 8, true)
        clearTimeout(this._scheduledTimeouts.get(id))
        this._scheduledTimeouts.delete(id)
      },

      // func getRandomData(r []byte)
      'runtime.getRandomData': (sp: number) => {
        crypto.randomFillSync(this._loadSlice(sp + 8))
      },

      // func finalizeRef(v ref)
      'syscall/js.finalizeRef': (sp: number) => {
        const id = this.mem.getUint32(sp + 8, true)
        this._goRefCounts[id]--
        if (this._goRefCounts[id] === 0) {
          const v = this._values[id]
          this._values[id] = null
          this._ids.delete(v)
          this._idPool.push(id)
        }
      },

      // func stringVal(value string) ref
      'syscall/js.stringVal': (sp: number) => {
        this._storeValue(sp + 24, this._loadString(sp + 8))
      },

      // func valueGet(v ref, p string) ref
      'syscall/js.valueGet': (sp: number) => {
        const result = Reflect.get(this._loadValue(sp + 8) as object, this._loadString(sp + 16))
        if (typeof this._inst.exports.getsp !== 'function') {
          throw new Error('invalid type')
        }
        sp = this._inst.exports.getsp() // see comment above
        this._storeValue(sp + 32, result)
      },

      // func valueSet(v ref, p string, x ref)
      'syscall/js.valueSet': (sp: number) => {
        Reflect.set(this._loadValue(sp + 8) as object, this._loadString(sp + 16), this._loadValue(sp + 32))
      },

      // func valueDelete(v ref, p string)
      'syscall/js.valueDelete': (sp: number) => {
        Reflect.deleteProperty(this._loadValue(sp + 8) as object, this._loadString(sp + 16))
      },

      // func valueIndex(v ref, i int) ref
      'syscall/js.valueIndex': (sp: number) => {
        this._storeValue(sp + 24, Reflect.get(this._loadValue(sp + 8) as object, this._getInt64(sp + 16)))
      },

      // valueSetIndex(v ref, i int, x ref)
      'syscall/js.valueSetIndex': (sp: number) => {
        Reflect.set(this._loadValue(sp + 8) as object, this._getInt64(sp + 16), this._loadValue(sp + 24))
      },

      // func valueCall(v ref, m string, args []ref) (ref, bool)
      'syscall/js.valueCall': (sp: number) => {
        try {
          const v = this._loadValue(sp + 8) as object
          const m = Reflect.get(v, this._loadString(sp + 16))
          const args = this._loadSliceOfValues(sp + 32)
          const result = Reflect.apply(m, v, args)
          if (typeof this._inst.exports.getsp !== 'function') {
            throw new Error('invalid type')
          }
          sp = this._inst.exports.getsp() // see comment above
          this._storeValue(sp + 56, result)
          this.mem.setUint8(sp + 64, 1)
        } catch (err) {
          this._storeValue(sp + 56, err)
          this.mem.setUint8(sp + 64, 0)
        }
      },

      // func valueInvoke(v ref, args []ref) (ref, bool)
      'syscall/js.valueInvoke': (sp: number) => {
        try {
          const v = this._loadValue(sp + 8) as Function
          const args = this._loadSliceOfValues(sp + 16)
          const result = Reflect.apply(v, undefined, args)
          if (typeof this._inst.exports.getsp !== 'function') {
            throw new Error('invalid type')
          }
          sp = this._inst.exports.getsp() // see comment above
          this._storeValue(sp + 40, result)
          this.mem.setUint8(sp + 48, 1)
        } catch (err) {
          this._storeValue(sp + 40, err)
          this.mem.setUint8(sp + 48, 0)
        }
      },

      // func valueNew(v ref, args []ref) (ref, bool)
      'syscall/js.valueNew': (sp: number) => {
        try {
          const v = this._loadValue(sp + 8) as Function
          const args = this._loadSliceOfValues(sp + 16)
          const result = Reflect.construct(v, args)
          if (typeof this._inst.exports.getsp !== 'function') {
            throw new Error('invalid type')
          }
          sp = this._inst.exports.getsp() // see comment above
          this._storeValue(sp + 40, result)
          this.mem.setUint8(sp + 48, 1)
        } catch (err) {
          this._storeValue(sp + 40, err)
          this.mem.setUint8(sp + 48, 0)
        }
      },

      // func valueLength(v ref) int
      'syscall/js.valueLength': (sp: number) => {
        this._setInt64(sp + 16, (this._loadValue(sp + 8) as string).length)
      },

      // valuePrepareString(v ref) (ref, int)
      'syscall/js.valuePrepareString': (sp: number) => {
        const str = encoder.encode(String(this._loadValue(sp + 8)))
        this._storeValue(sp + 16, str)
        this._setInt64(sp + 24, str.length)
      },

      // valueLoadString(v ref, b []byte)
      'syscall/js.valueLoadString': (sp: number) => {
        const str = this._loadValue(sp + 8)
        this._loadSlice(sp + 16).set(str as ArrayLike<number>)
      },

      // func valueInstanceOf(v ref, t ref) bool
      'syscall/js.valueInstanceOf': (sp: number) => {
        this.mem.setUint8(sp + 24, this._loadValue(sp + 8) instanceof (this._loadValue(sp + 16) as any) ? 1 : 0)
      },

      // func copyBytesToGo(dst []byte, src ref) (int, bool)
      'syscall/js.copyBytesToGo': (sp: number) => {
        const dst = this._loadSlice(sp + 8)
        const src = this._loadValue(sp + 32)
        if (!(src instanceof Uint8Array)) {
          this.mem.setUint8(sp + 48, 0)
          return
        }
        const toCopy = src.subarray(0, dst.length)
        dst.set(toCopy)
        this._setInt64(sp + 40, toCopy.length)
        this.mem.setUint8(sp + 48, 1)
      },

      // func copyBytesToJS(dst ref, src []byte) (int, bool)
      'syscall/js.copyBytesToJS': (sp: number) => {
        const dst = this._loadValue(sp + 8)
        const src = this._loadSlice(sp + 16)
        if (!(dst instanceof Uint8Array)) {
          this.mem.setUint8(sp + 48, 0)
          return
        }
        const toCopy = src.subarray(0, dst.length)
        dst.set(toCopy)
        this._setInt64(sp + 40, toCopy.length)
        this.mem.setUint8(sp + 48, 1)
      },

      debug: (value?: any) => {
        console.log(value)
      },
    },
  }

  async run(instance: WebAssembly.Instance, thing: object = {}) {
    this._inst = instance
    this.mem = new DataView(asMemory(this._inst.exports.mem).buffer)
    this._values = [
      // JS values that Go currently has references to, indexed by reference id
      NaN,
      0,
      null,
      true,
      false,
      {
        Array,
        crypto,
        fetch,
        fs,
        Object,
        process,
        Uint8Array,
        ...thing,
      },
      this,
    ]
    this._goRefCounts = [] // number of references that Go has to a JS value, indexed by reference id
    this._ids = new Map() // mapping from JS values to reference ids
    this._idPool = [] // unused ids that have been garbage collected
    this.exited = false // whether the Go program has exited

    // Pass command line arguments and environment variables to WebAssembly by writing them to the linear memory.
    let offset = 4096

    const strPtr = (str: string) => {
      const ptr = offset
      const bytes = encoder.encode(str + '\0')
      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes)
      offset += bytes.length
      if (offset % 8 !== 0) {
        offset += 8 - (offset % 8)
      }
      return ptr
    }

    const argc = this.argv.length

    const argvPtrs = []
    this.argv.forEach((arg) => {
      argvPtrs.push(strPtr(arg))
    })
    argvPtrs.push(0)

    const keys = Object.keys(this.env).sort()
    keys.forEach((key) => {
      argvPtrs.push(strPtr(`${key}=${this.env[key]}`))
    })
    argvPtrs.push(0)

    const argv = offset
    argvPtrs.forEach((ptr) => {
      this.mem.setUint32(offset, ptr, true)
      this.mem.setUint32(offset + 4, 0, true)
      offset += 8
    })

    if (typeof this._inst.exports.run === 'function') this._inst.exports.run(argc, argv)
    if (this.exited) {
      this._resolveExitPromise()
    }
    await this._exitPromise
  }

  _resume = () => {
    if (this.exited) {
      throw new Error('Go program has already exited')
    }
    if (typeof this._inst.exports.resume === 'function') {
      this._inst.exports.resume()
    }
    if (this.exited) {
      this._resolveExitPromise()
    }
  }

  _makeFuncWrapper(id: number) {
    return (...args: unknown[]) => {
      const event: Event = {id: id, this: this, args}
      this._pendingEvent = event
      this._resume()
      return event.result
    }
  }

  _setInt64 = (addr: number, v: number) => {
    this.mem.setUint32(addr + 0, v, true)
    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true)
  }

  _getInt64 = (addr: number) => {
    const low = this.mem.getUint32(addr + 0, true)
    const high = this.mem.getInt32(addr + 4, true)
    return low + high * 4294967296
  }

  _loadValue = (addr: number) => {
    const f = this.mem.getFloat64(addr, true)
    if (f === 0) {
      return undefined
    }
    if (!isNaN(f)) {
      return f
    }

    const id = this.mem.getUint32(addr, true)
    return this._values[id]
  }

  _storeValue = (addr: number, v: unknown) => {
    const nanHead = 0x7ff80000

    if (typeof v === 'number') {
      if (isNaN(v)) {
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 0, true)
        return
      }
      if (v === 0) {
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 1, true)
        return
      }
      this.mem.setFloat64(addr, v, true)
      return
    }

    switch (v) {
      case undefined:
        this.mem.setFloat64(addr, 0, true)
        return
      case null:
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 2, true)
        return
      case true:
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 3, true)
        return
      case false:
        this.mem.setUint32(addr + 4, nanHead, true)
        this.mem.setUint32(addr, 4, true)
        return
    }

    let id = this._ids.get(v)
    if (id === undefined) {
      id = this._idPool.pop()
      if (id === undefined) {
        id = this._values.length
      }
      this._values[id] = v
      this._goRefCounts[id] = 0
      this._ids.set(v, id)
    }
    this._goRefCounts[id]++
    let typeFlag = 1
    switch (typeof v) {
      case 'string':
        typeFlag = 2
        break
      case 'symbol':
        typeFlag = 3
        break
      case 'function':
        typeFlag = 4
        break
    }
    this.mem.setUint32(addr + 4, nanHead | typeFlag, true)
    this.mem.setUint32(addr, id, true)
  }

  _loadSlice = (addr: number) => {
    const array = this._getInt64(addr + 0)
    const len = this._getInt64(addr + 8)
    return new Uint8Array(asMemory(this._inst.exports.mem).buffer, array, len)
  }

  _loadSliceOfValues = (addr: number) => {
    const array = this._getInt64(addr + 0)
    const len = this._getInt64(addr + 8)
    const a = new Array(len)
    for (let i = 0; i < len; i++) {
      a[i] = this._loadValue(array + i * 8)
    }
    return a
  }

  _loadString = (addr: number) => {
    const saddr = this._getInt64(addr + 0)
    const len = this._getInt64(addr + 8)
    return decoder.decode(new DataView(asMemory(this._inst.exports.mem).buffer, saddr, len))
  }
}