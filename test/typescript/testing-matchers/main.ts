import { Construct } from "constructs";
import { App } from "cdktf";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container } from "./.gen/providers/docker/container";
import { Image } from "./.gen/providers/docker/image";
import { Network } from "./.gen/providers/docker/network";

export class MyStack extends Construct {
  public readonly dockerImage: Image;
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {
      host: "unix:///var/run/docker.sock",
    });

    this.dockerImage = new Image(this, "nginxImage", {
      name: "nginx:latest",
      keepLocally: false,
    });

    new Network(this, "network", {
      name: "network",
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
