// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformVariable,
  TerraformIterator,
  Fn,
  TerraformOutput,
  TerraformAsset,
  AssetType,
} from "cdktf";
import * as ArchiveProvider from "./.gen/providers/archive";
import * as NomadProvider from "./.gen/providers/nomad";

export class TestIterators extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ArchiveProvider.provider.ArchiveProvider(this, "archive");

    const list = new TerraformVariable(this, "files", {
      type: "list(string)",
      default: ["a", "b"],
    });

    const it = TerraformIterator.fromList(list.listValue);

    const files = new TerraformAsset(this, "files-dir", {
      path: "./files",
      type: AssetType.DIRECTORY,
    });

    // TODO: we don't support using .dynamic for simple mapping (i.e. to a string instead of to an object) yet
    // tracking issue: https://github.com/hashicorp/terraform-cdk/issues/1940
    new ArchiveProvider.dataArchiveFile.DataArchiveFile(this, "dir", {
      type: "zip",
      outputPath: "${path.module}/out1.zip",
      sourceDir: files.path,
      // excludes: it.dynamic(`${it.value}.txt`), // allow this at some point
    });

    // HCL equivalent:
    // data "archive_file" "inline" {
    //   type        = "zip"
    //   output_path = "${path.module}/out2.zip"
    //
    //   dynamic "source" {
    //     for_each = var.files
    //     iterator = each
    //     content {
    //       content  = upper(each.value)
    //       filename = "${each.value}.txt"
    //     }
    //   }
    // }
    // CDKTF:
    new ArchiveProvider.dataArchiveFile.DataArchiveFile(this, "inline", {
      type: "zip",
      outputPath: "${path.module}/out2.zip",
      source: it.dynamic({
        content: Fn.upper(it.value),
        filename: `${it.value}.txt`,
      }),
    });

    // K8S example of an attribute that's a list(object) type instead of a dynamic block
    const pets = new TerraformVariable(this, "pets", {
      type: "list(object({ name = string, age = number }))",
      default: [
        { name: "Oscar", age: 3 },
        { name: "Fred", age: 6 },
      ],
    });
    const petsIt = TerraformIterator.fromList(pets.listValue);

    new TerraformOutput(this, "test-list-type", {
      value: petsIt.dynamic({
        name: petsIt.getString("name"),
        age: petsIt.getNumber("age"),
      }),
    });

    new TerraformOutput(this, "test-nested-list-type", {
      value: {
        nested: {
          in: {
            an: {
              object: petsIt.dynamic({
                name: petsIt.getString("name"),
                age: petsIt.getNumber("age"),
              }),
            },
          },
        },
      },
    });
  }
}

// to test cases that can't be applied (i.e. because we have no Nomad cluster)
export class TestIteratorsSynthOnly extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NomadProvider.provider.NomadProvider(this, "nomad", {
      address: "dummy",
    });

    const topologySegments = new TerraformVariable(this, "topologySegments", {
      type: "list(object({ rack = string, zone = string}))",
      default: [
        { rack: "R1", zone: "us-east-1a" },
        { rack: "R2", zone: "us-east-1b" },
      ],
    });

    const it = TerraformIterator.fromList(topologySegments.listValue);

    // HCL (from https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/volume)
    // resource "nomad_volume" "mysql_volume" {
    //   type        = "csi"
    //   plugin_id   = "aws-ebs0"
    //   volume_id   = "mysql_volume"
    //   name        = "mysql_volume"
    //   external_id = module.hashistack.ebs_test_volume_id
    //   capability {
    //     access_mode     = "single-node-writer"
    //     attachment_mode = "file-system"
    //   }
    //   mount_options {
    //     fs_type = "ext4"
    //   }
    //   topology_request {
    //     required {
    //       topology {
    //         segments = {
    //           rack = "R1"
    //           zone = "us-east-1a"
    //         }
    //       }
    //       topology {
    //         segments = {
    //           rack = "R2"
    //         }
    //       }
    //     }
    //   }
    // }
    // CDKTF:
    new NomadProvider.volume.Volume(this, "mysqlvolume", {
      pluginId: "aws-ebs0",
      name: "mysql-volume",
      volumeId: "mysql-volume",
      externalId: "dummy",
      topologyRequest: {
        required: {
          topology: it.dynamic({
            segments: {
              rack: it.getString("rack"),
              zone: it.getString("zone"),
            },
          }),
        },
      },
    });
  }
}

const app = Testing.stubVersion(new App({}));
new TestIterators(app, "test-iterators");
new TestIteratorsSynthOnly(app, "test-iterators-synth-only");
app.synth();
