import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformVariable,
  TerraformIterator,
  Fn,
} from "cdktf";
import * as ArchiveProvider from "./.gen/providers/archive";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ArchiveProvider.ArchiveProvider(this, "archive", {});

    const list = new TerraformVariable(this, "files", {
      type: "list(string)",
      default: ["a", "b"],
    });

    const it = TerraformIterator.fromList(list.listValue);

    new ArchiveProvider.DataArchiveFile(this, "dir", {
      type: "zip",
      output_path: "${path.module}/out1.zip",
      sourceDir: "${path.module}/files",
      // excludes: [for x in var.files : "${x}.txt"] // TODO: use plain list conversion TF Fns
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
    new ArchiveProvider.DataArchiveFile(this, "inline", {
      type: "zip",
      output_path: "${path.module}/out2.zip",
      source: it.dynamic({
        content: Fn.upper(it.value),
        filename: `${it.value}.txt`,
      }),
    });

    // TODO: kubernetes manifest.spec.versions for it.dynamic within a list type attribute (not a block)
    // https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/manifest
  }
}

const app = Testing.stubVersion(new App({}));
new HelloTerra(app, "hello-deploy");
app.synth();
