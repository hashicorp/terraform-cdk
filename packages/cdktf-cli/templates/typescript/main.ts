import { App } from "cdktf";
import { {{ stackName }} } from "./stacks/{{ stackFile }}";

const app = new App();
// Add new stacks by running cdktf stack add <stack-name>
new {{ stackName }}(app, "{{ $base }}");
app.synth();
