import { Construct } from "constructs";
import { App } from "cdktf";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container } from "./.gen/providers/docker/container";
import { Image } from "./.gen/providers/docker/image";

// Dummy class used for testing - see __tests__ for examples in documentation
export class MyApplicationsAbstraction extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {
      host: "unix:///var/run/docker.sock",
    });

    new Image(this, "image", {
      name: "ubuntu:latest",
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
new MyApplicationsAbstraction(app, "demo-cdktf-ts-docker");
app.synth();
