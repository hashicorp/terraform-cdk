# Vault Example

A simple example for the Vault provider

### Setup

In order to use this for development, it's the easiest to use the Docker vault image:

```
yarn install
yarn docker:run
yarn docker:token # returns the Root Vault token
```

Set that token in the provider config in [main.ts](./main.ts)

```
cdktf get
cdktf deploy
```

### Teardown

```
yarn docker:stop
```
