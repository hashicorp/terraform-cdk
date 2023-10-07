import { App } from "cdktf";
import { {{basePascal}}Stack } from "../lib/{{$base}}-stack";

const app = new App();
new {{basePascal}}Stack(app, "{{basePascal}}");
app.synth();
