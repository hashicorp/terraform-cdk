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


${this.getParameters()}
${this.getFlags()}

${this.command(
  this.parameters.map(({ name }) => `$${name}`),
  Object.fromEntries(
    Object.entries(this.flags).map(([flag]) => [flag, `$${flag}`])
  )
)}
      `,
    });
  }

  private getParameters() {
    if (this.parameters.length === 0) {
      return "";
    }
    return this.parameters
      .map(({ name, description, required }, index) =>
        required
          ? `
    if [[ -z $${index + 1} ]]; then
      echo "Missing required parameter ${name} as ${
              index + 1
            }. parameter: ${description}";
      exit 1
    fi
    ${name}=$${index + 1}
      `
          : `${name}=$${index + 1}`
      )
      .join("\n");
  }
  private getFlags() {
    if (Object.keys(this.flags).length === 0) {
      return "";
    }
    return `
while getopts ${Object.keys(this.flags).join(":")}: flag; do
  case "\${flag}" in
${Object.entries(this.flags)
  .map(([flag]) => `${flag}) ${flag}=\${OPTARG};;`)
  .join("\n")}
  esac
done
`;
  }
}
