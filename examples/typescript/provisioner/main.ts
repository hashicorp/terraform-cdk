// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
/*

Shows how provisioners can be used, requires docker and vagrant to be installed and working

*/

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { DockerProvider } from "./.gen/providers/docker/provider";
import { NullProvider } from "./.gen/providers/null/provider";
import { Resource } from "./.gen/providers/null/resource";
import { Container } from "./.gen/providers/docker/container";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DockerProvider(this, "provider", {});
    new NullProvider(this, "null");

    const builder = new Resource(this, "resource", {
      provisioners: [
        {
          type: "local-exec",
          command: `docker build -t local-image -f ${__dirname}/Dockerfile ${__dirname}`,
        },
      ],
    });

    new Container(this, "container", {
      dependsOn: [builder],
      image: "local-image",
      name: "local-image",
      ports: [
        {
          internal: 80,
          external: 8042,
        },
      ],
    });
    const vagrant = new Resource(this, "vagrant", {
      provisioners: [
        {
          type: "local-exec",
          command: `vagrant up`,
        },
        {
          type: "local-exec",
          command: `vagrant destroy -f`,
          when: "destroy",
        },
      ],
    });

    new Resource(this, "vagrant-provisioner", {
      dependsOn: [vagrant],
      connection: {
        type: "ssh",
        host: "127.0.0.1",
        user: "vagrant",
        password: "vagrant",
        port: 2222,
      },
      provisioners: [
        {
          type: "local-exec",
          command: "cat package.json",
          workingDir: __dirname,
        },
        {
          type: "file",
          destination: "/home/vagrant/foo.txt",
          content: "Hey there",
        },
        {
          type: "remote-exec",
          inline: ["cp /home/vagrant/foo.txt /home/vagrant/foo2.txt"],
        },
      ],
    });
  }
}

const app = new App();
new MyStack(app, "demo-cdktf-ts-provisioner");
app.synth();
