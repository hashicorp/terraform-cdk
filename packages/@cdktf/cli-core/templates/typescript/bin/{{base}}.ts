import { App } from "cdktf";
import { {{$base}}Stack } from "../lib/{{ $base }}-stack";

const app = new App();
new {{$base}}Stack(app, "{{ $base }}");
app.synth();
