# @cdktf/plugin

This packages ships the foundational blocks to build your CDKTF Plugin on.

## Creating my own plugin

1. Create a new Typescript project (JS should work as well but is not tested explicitly)
   - Make sure to name the binary starting with `cdktf`, e.g. `cdktf-logs` to be able to run `cdktf logs`
2. TODO

## Creating constructs using plugins

- Make sure to declare the plugin as optional dependency

## Using a plugin

1. Install the plugin: `npm install cdktf-logs`
2. Use Plugin constructs in your code (or third party constructs): `import { LoggableConstruct } from "cdktf-logs";`
3. Use the plugins: `cdktf logs --help`
