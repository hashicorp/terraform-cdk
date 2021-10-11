# @cdktf/provider-generator

`@cdktf/provider-generator` exposes an API to generate Terraform CDK provider bindings.

## Usage

```sh
yarn install @cdktf/provider-generator
```

### Generate bindings

```ts
const constructsMaker = new ConstructsMaker(
  constructsOptions,
  constraints,
  (payload: { targetLanguage: string; trackingPayload: Record<string, any> }) =>
    sendTelemetry("get", {
      language: payload.targetLanguage,
      ...payload.trackingPayload,
    })
);
await constructsMaker.generate();
```
