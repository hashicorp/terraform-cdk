// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformOutput,
  Testing,
  Annotations,
} from "cdktf";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const output = new TerraformOutput(this, "dummy", {
      value: "nothing",
    });

    Annotations.of(output).addInfo("info annotation");
    Annotations.of(output).addWarning("warning annotation");
    Annotations.of(output).addError("error annotation");
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "hello-terra");
app.synth();
