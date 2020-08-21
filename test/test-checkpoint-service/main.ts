import { Construct } from 'constructs';
import { App, TerraformStack, Testing } from 'cdktf';

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here

  }
}

const app = Testing.stubVersion(new App({stackTraces: false}));
new HelloTerra(app, 'hello-terra');
app.synth();