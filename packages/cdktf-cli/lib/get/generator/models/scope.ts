export class Scope {
  constructor(public readonly name: string, public readonly isProvider: boolean, public isComputed = false, public isOptional = true, public isRequired = false, public inBlockType = false) {}
}
