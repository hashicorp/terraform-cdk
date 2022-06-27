#!/usr/bin/env node

const { writeFileSync, readFileSync, copySync, rmSync, existsSync } = require('fs-extra');
const path = require('path');

const args = process.argv.slice(2);
const providerName = args[0];

if (!providerName) {
    throw new Error('provider name is required');
}

const targetPath = path.resolve(__dirname, "providers", providerName)
if (existsSync(targetPath)) {
    rmSync(targetPath, {recursive: true })
}

copySync(path.resolve(__dirname, "template"), targetPath);

// Add provider in main.ts
const mainTsPath = path.resolve(targetPath, 'main.ts');
const mainTs = readFileSync(mainTsPath, 'utf8');
writeFileSync(
    mainTsPath, 
    mainTs.replace(
        '// Reference import here', 
        `import * as provider from "./.gen/providers/${providerName}";`
    ),
    "utf8"
);

// Add provider in cdktf.json
const cdktfJsonPath = path.resolve(targetPath, 'cdktf.json');
const cdktfJson = require(cdktfJsonPath);
const providers = require("./providers.json")
cdktfJson.terraformProviders.push(providers[providerName]);
writeFileSync(cdktfJsonPath, JSON.stringify(cdktfJson, null, 2), "utf8");

