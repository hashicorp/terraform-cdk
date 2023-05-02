// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
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
import { Image } from "./.gen/providers/docker/image";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { Container, ContainerConfig } from "./.gen/providers/docker/container";
import { setLogCommand } from "@cdktf/log-plugin";
import { DataDockerImage } from "./.gen/providers/docker/data-docker-image/index";

// This would normally go in a shared construct library
class LoggableContainer extends Container {
  constructor(scope: Construct, name: string, config: ContainerConfig) {
    super(scope, name, config);

    setLogCommand(this, `docker logs {{ state.id }}{{#if watch}} -f{{/if}}`);
  }
}

class MyStack extends TerraformStack {
  public readonly dockerImage: Image;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {});

    const ngnix = new DataDockerImage(this, "nginxImageSha", {
      name: "nginx:latest",
    });
    this.dockerImage = new Image(this, "nginxImage", {
      name: ngnix.repoDigest,
      keepLocally: false,
    });

    new LoggableContainer(this, "nginxContainer", {
      image: this.dockerImage.latest,
      name: "tutorial",
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
    });
  }
}

const app = new App();
new MyStack(app, "demo-cdktf-ts-docker");
app.synth();
