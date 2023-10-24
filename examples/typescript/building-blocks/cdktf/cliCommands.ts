import { Construct } from "constructs";
import { File } from "./templating";

export class CliCommand extends Construct {
  private scriptFile?: File;
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
    super(scope, filename);
  }

  // TODO: Hack to add an extra construct, refactor lifecycle methods to be part of stack
  public toTerraform() {
    if (!this.scriptFile) {
      this.scriptFile = new File(this, "script", {
        overwrite: true,
        filename: this.filename,
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
      : `$${name}=$${index + 1}`
  )
  .join("\n")}

while getopts ${Object.keys(this.flags).join(":")}: flag; do
    case "\${flag}" in
${Object.entries(this.flags)
  .map(([flag, name]) => `${flag}) ${name}=\${OPTARG};;`)
  .join("\n")}
    esac
done

${this.command(
  this.parameters.map(({ name }) => `$${name}`),
  Object.fromEntries(
    Object.entries(this.flags).map(([flag, name]) => [flag, `$${name}`])
  )
)}
        `,
      });
    }
    return {};
  }
}
