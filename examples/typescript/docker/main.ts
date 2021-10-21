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
import { App, TerraformOutput, TerraformStack } from "cdktf";
import {
  Container,
  Image,
  DockerProvider,
  // Service,
} from "./.gen/providers/docker";

class MyImages extends TerraformStack {
  public readonly nginxImage: Image;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new DockerProvider(this, "provider", {});

    this.nginxImage = new Image(this, "nginxImage", {
      name: "nginx:latest",
      keepLocally: false,
    });

    new TerraformOutput(this, "anotherOne", {
      value: this.nginxImage.latest,
    });
  }
}

class MyStack extends TerraformStack {
  constructor(
    scope: Construct,
    name: string,
    private readonly dockerImage: Image
  ) {
    super(scope, name);

    new DockerProvider(this, "provider", {});

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

    // new Service(this, "nginxService", {
    //   name: "nginx",
    //   taskSpec: {
    //     containerSpec: {
    //       image: this.dockerImage.latest,
    //     },
    //   },
    // });
  }
}

const app = new App();
const images = new MyImages(app, "TestStack");
new MyStack(app, "demo-cdktf-ts-docker", images.nginxImage);
app.synth();
