import { Construct } from "constructs";
import { File } from "./templating";
import * as path from "path";

export class CliCommand extends Construct {
  constructor(
    scope: Construct,
    private filename: string,
    public command: (
      parameters: string[],
      flags: Record<string, string>
    ) => string,
    private parameters: {
      name: string;
      description: string;
      required: boolean;
    }[] = [],
    private flags: Record<string, string> = {}
  ) {
    super(scope, `cli-command-${filename}`);

    new File(this, "script", {
      overwrite: true,
      executable: true,
      filename: path.join("cdktf.out", "scripts", this.filename),
      content: `#!/bin/bash
set -ex

${this.parameters
  .map(({ name, description, required }, index) =>
    required
      ? `
if [[ -z $${index + 1} ]]; then
  echo "Missing required parameter ${name} as ${
          index + 1
        } parameter: ${description}";
  exit 1
fi
$${name}=$${index + 1}
  `
      : `${name}=$${index + 1}`
  )
  .join("\n")}

while getopts ${Object.keys(this.flags).join(":")}: flag; do
  case "\${flag}" in
${Object.entries(this.flags)
  .map(([flag]) => `${flag}) ${flag}=\${OPTARG};;`)
  .join("\n")}
  esac
done

${this.command(
  this.parameters.map(({ name }) => `$${name}`),
  Object.fromEntries(
    Object.entries(this.flags).map(([flag]) => [flag, `$${flag}`])
  )
)}
      `,
    });
  }
}
