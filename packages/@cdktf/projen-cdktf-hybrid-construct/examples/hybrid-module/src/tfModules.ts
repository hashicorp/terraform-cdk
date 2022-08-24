import { App } from "cdktf";
import { TFModuleStack } from "cdktf-tf-module-stack";
import { Construct } from "constructs";
import { MyConstruct } from "./index";

class MyAwesomeModule extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new MyConstruct(this, "my-construct", {
      propertyA: "valueA",
    });
  }
}

const app = new App();
// This is the name the module can be found under.
// We expect a "my-awesome-module.md" file in this directory.
// The README.md file will be generated from this file.
new MyAwesomeModule(app, "my-awesome-module");
app.synth();
