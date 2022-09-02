# google-cloudrun

A port of the TypeScript example at: https://github.com/hashicorp/terraform-cdk/tree/main/examples/typescript/google-cloudrun

This resembles the example for the Google Cloud at [Hashicorp Learn](https://learn.hashicorp.com/terraform/gcp/build)

## Usage

Install project dependencies

```shell
go get ./...
```

Generate CDK for Terraform constructs for Terraform provides and modules used in the project.

```bash
cdktf get
```

You can now edit the `main.go` file if you want to modify any code.

Make sure to create your credential file `cdktf-example.json` to make this example usable.

Generate Terraform configuration

```bash
cdktf synth
```

The above command will create a folder called `cdktf.out` that contains all Terraform JSON configuration that was generated.

See changes `cdktf diff` and deploy via `cdktf deploy`.

When you're done run `cdktf destroy`.

You need

- `GCP project ID`
- `cdktf-example.json` file containing your GCP `credentials`
