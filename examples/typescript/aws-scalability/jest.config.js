/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    clearMocks: true,
    coverageProvider: "v8",
    setupFilesAfterEnv: ["./setup.js"],
  };
  
