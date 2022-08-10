// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as archiver from "archiver";
import * as http from "http";
import { AddressInfo } from "net";

export class TemplateServer {
  private server: http.Server;
  private static templateFile = "template.zip";

  constructor(private srcDirectory: string) {
    this.server = http.createServer(this.handle);
  }

  handle = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url !== `/${TemplateServer.templateFile}`) {
      res.statusCode = 404;
      res.end();
    }

    res.on("error", (err) => {
      throw err;
    });
    res.writeHead(200, {
      "Content-Type": "application/zip",
    });

    const archive = archiver("zip");
    archive.pipe(res);
    archive.directory(this.srcDirectory, false);
    archive.finalize();
  };

  async start(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.server.listen(() => {
          const { port } = this.server.address() as AddressInfo;
          resolve(`http://localhost:${port}/${TemplateServer.templateFile}`);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) =>
      this.server.close((err) => (err ? reject(err) : resolve()))
    );
  }
}
