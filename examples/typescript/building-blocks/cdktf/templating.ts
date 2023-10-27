import { Construct } from "constructs";
import * as path from "path";
import * as fs from "fs";

export interface FileConfig {
  filename: string;
  content: string;
  overwrite: boolean;
  executable?: boolean;
}

export class File extends Construct {
  constructor(scope: Construct, ns: string, private config: FileConfig) {
    super(scope, ns);
  }

  public setup() {
    if (!this.config.overwrite && fs.existsSync(this.config.filename)) {
      return;
    }

    fs.mkdirSync(path.dirname(this.config.filename), { recursive: true });
    fs.writeFileSync(this.config.filename, this.config.content);

    if (this.config.executable) {
      fs.chmodSync(this.config.filename, "755");
    }
  }
}

export interface TemplateFileConfig {
  filename: string;
  content: string;
}

export class TemplateFile extends File {
  constructor(scope: Construct, ns: string, config: TemplateFileConfig) {
    super(scope, ns, { ...config, overwrite: false });
  }
}
