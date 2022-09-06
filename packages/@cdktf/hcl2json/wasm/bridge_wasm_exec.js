// Copyright 2021 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Modified from https://github.com/golang/go/blob/master/misc/wasm/wasm_exec_node.js

"use strict";

globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

globalThis.performance = {
	now() {
		const [sec, nsec] = process.hrtime();
		return sec * 1000 + nsec / 1000000;
	},
};

const crypto = require("crypto");
globalThis.crypto = {
	getRandomValues(b) {
		crypto.randomFillSync(b);
	},
};

require("./wasm_exec");