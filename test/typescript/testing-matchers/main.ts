import { Construct } from "constructs";
import { App } from "cdktf";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container } from "./.gen/providers/docker/container";

export class MyStack extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {
      host: "unix:///var/run/docker.sock",
    });

    new Container(this, "nginxContainer", {
      image: "nginx:latest",
      name: "nginx-cdktf",
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
      privileged: false,
    });
  }
}

const app = new App();
new MyStack(app, "demo-cdktf-ts-docker");
app.synth();
