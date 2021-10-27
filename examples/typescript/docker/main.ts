/*

Starts a Docker container with an Nginx server.

Steps:

- Start Docker on your machine
- Run `cdktf get` to install dependencies
- Run `cdktf deploy` to run the Nginx container
- Visit http://localhost:8000/ to view the Nginx default page
- Optional: `docker ps` will show the running container
- Destroy with `cdktf destroy`

*/

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import {
  Container,
  Image,
  DockerProvider,
  Service,
} from "./.gen/providers/docker";

class MyStack extends TerraformStack {
  public readonly dockerImage: Image;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {});

    this.dockerImage = new Image(this, "nginxImage", {
      name: "nginx:latest",
      keepLocally: false,
    });

    new Container(this, "nginxContainer", {
      image: this.dockerImage.latest,
      name: "tutorial",
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
    });

    new Service(this, "nginxService", {
      name: "nginx",
      taskSpec: {
        containerSpec: {
          image: this.dockerImage.latest,
        },
      },
    });
  }
}

const app = new App();
new MyStack(app, "demo-cdktf-ts-docker");
app.synth();
