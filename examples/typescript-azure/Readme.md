# Example for Azure Cloud based on Typescript

This is based on the provided examples for AWS and Google but adapted to Azure

## Usage

Install project dependencies

```shell
yarn install
```

Generate CDK for Terraform constructs for Terraform provides and modules used in the project.

```bash
cdktf get
```

You can now edit the `main.ts` file if you want to modify any code.

Make sure to run az login on the shell where this will run. Alternatively, put client id and secret in configuration for automation scenarios.

You must also set `resourceGroupName` to your personal resource group name in `main.ts`.

Generate Terraform configuration

```bash
cdktf synth
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

See changes `cdktf diff` and deploy via `cdktf deploy`.

When you're done run `cdktf destroy`.
