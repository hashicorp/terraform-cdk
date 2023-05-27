// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Modified from https://github.com/golang/go/blob/master/misc/wasm/wasm_exec_node.js

"use strict";

globalThis.require = require;
globalThis.fs = require("fs");

// Node 20 already has a `TextEncoder` and `TextDecoder` properties. 
// Setting them again will cause an error as they're read-only.
if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = require("util").TextEncoder;
}
if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = require("util").TextDecoder;
}

globalThis.performance = {
	now() {
		const [sec, nsec] = process.hrtime();
		return sec * 1000 + nsec / 1000000;
	},
};

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