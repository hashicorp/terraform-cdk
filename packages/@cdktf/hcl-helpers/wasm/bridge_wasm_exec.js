// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Modified from https://github.com/golang/go/blob/master/misc/wasm/wasm_exec_node.js

"use strict";

globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

globalThis.performance ??= require("performance");

// Node >= 19 has a crypto function object, lower node versions need this polyfill
if (!globalThis.crypto) {
	const crypto = require("crypto");
	globalThis.crypto = {
		getRandomValues(b) {
			return crypto.randomFillSync(b);
		},
	};
}

require("./wasm_exec");