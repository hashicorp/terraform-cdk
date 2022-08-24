// This file will be synthesized to check if all examples are working

import { App } from "cdktf";
// All examples need to be imported here
import { BasicExample } from "./basic";

const app = new App();

// All examples need to be initialized here
new BasicExample(app, "basic-example");
app.synth();
