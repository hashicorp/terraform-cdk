// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import { Language } from "@cdktf/provider-generator";
import { existsSync } from "fs-extra";
import path from "path";
import { exec } from "../util";
import { xml2js, js2xml, Element } from "xml-js";
import { Errors } from "../errors";
import * as fs from "fs-extra";
import * as semver from "semver";

/**
 * manages installing, updating, and removing dependencies
 * in the package system used by the target language of a CDKTF
 * project
 */
export abstract class PackageManager {
  constructor(protected readonly workingDirectory: string) {}

  public static forLanguage(
    language: Language,
    workingDirectory: string
  ): PackageManager {
    switch (language) {
      case Language.GO:
        return new GoPackageManager(workingDirectory);
      case Language.TYPESCRIPT:
        return new NodePackageManager(workingDirectory);
      case Language.PYTHON:
        return new PythonPackageManager(workingDirectory);
      case Language.CSHARP:
        return new NugetPackageManager(workingDirectory);
      case Language.JAVA:
        return new MavenPackageManager(workingDirectory);
      default:
        throw new Error(`Unknown language: ${language}`);
    }
  }

  public abstract addPackage(
    packageName: string,
    packageVersion?: string
  ): Promise<void>;
  // public abstract listPackages(): Promise<todo>; future stuff..
  // add check if package exists already. might query version in the future and offer to upgrade?
}

class NodePackageManager extends PackageManager {
  private hasYarnLockfile(): boolean {
    return existsSync(path.join(this.workingDirectory, "yarn.lock"));
  }

  public async addPackage(
    packageName: string,
    packageVersion?: string
  ): Promise<void> {
    console.log(`Adding package ${packageName} @ ${packageVersion}`);

    // probe for package-lock.json or yarn.lock
    let command = "npm";
    let args = ["install"];

    if (this.hasYarnLockfile()) {
      command = "yarn";
      args = ["add"];
    }
    args.push(
      packageVersion ? packageName + "@" + packageVersion : packageName
    );

    console.log(
      `Installing package ${packageName} @ ${packageVersion} using ${command}.`
    );

    await exec(command, args, { cwd: this.workingDirectory });

    console.log("Package installed.");
  }
}

class PythonPackageManager extends PackageManager {
  private get appCommand() {
    try {
      return JSON.parse(
        fs.readFileSync(
          path.resolve(this.workingDirectory, "cdktf.json"),
          "utf8"
        )
      )["app"];
    } catch (e) {
      throw Errors.Usage(
        `Could not find find and parse cdktf.json in ${this.workingDirectory}`
      );
    }
  }

  public async addPackage(
    packageName: string,
    packageVersion?: string
  ): Promise<void> {
    const usePipenv = this.appCommand.includes("pipenv");

    if (usePipenv) {
      console.log(
        `Installing package ${packageName} @ ${packageVersion} using pipenv.`
      );

      await exec("pipenv", ["install", `${packageName}~=${packageVersion}`], {
        cwd: this.workingDirectory,
        env: {
          ...process.env,
          PIPENV_QUIET: "1",
        },
        stdio: ["inherit", 1, 1],
      });

      console.log("Package installed.");
    } else {
      console.log(
        `Installing package ${packageName} @ ${packageVersion} using pip.`
      );

      const requirementsFilePath = path.join(
        this.workingDirectory,
        "requirements.txt"
      );
      if (!fs.existsSync(requirementsFilePath)) {
        throw Errors.Usage(
          `Could not find requirements.txt in ${this.workingDirectory}`
        );
      }

      const requirements = await fs.readFile(requirementsFilePath, "utf8");
      if (requirements.includes(packageName)) {
        console.log(
          `Package ${packageName} already installed. Skipping installation.`
        );
        return;
      }

      const newRequirements =
        requirements +
        `\n${packageName}${packageVersion ? `~=${packageVersion}` : ""}`;
      await fs.writeFile(requirementsFilePath, newRequirements, "utf8");

      await exec("pip", ["install", "-r", "requirements.txt"], {
        cwd: this.workingDirectory,
        stdio: ["inherit", 1, 1],
      });

      console.log("Package installed.");
    }
  }
}

class NugetPackageManager extends PackageManager {
  public async addPackage(
    packageName: string,
    packageVersion?: string
  ): Promise<void> {
    const command = "dotnet";
    const args = ["add", "package", packageName];
    if (packageVersion) {
      args.push("--version", packageVersion);
    }
    console.log(
      `Installing package ${packageName} @ ${packageVersion} using "${command} ${args.join(
        " "
      )}".`
    );

    await exec(command, args, { cwd: this.workingDirectory });

    console.log("Package installed.");
  }
}

class MavenPackageManager extends PackageManager {
  public async addPackage(
    packageName: string,
    packageVersion = "LATEST" // the latest option is deprecated in maven 3.5
  ): Promise<void> {
    console.log(`Adding ${packageName} @ ${packageVersion} to pom.xml`);
    // Assert pom.xml exists
    const pomPath = path.join(this.workingDirectory, "pom.xml");
    if (!existsSync(pomPath)) {
      throw Errors.Usage(
        "No pom.xml found in current working directory. Please run the command from the root of your project."
      );
    }

    const pom = await fs.readFile(pomPath, "utf8");
    const pomXml = (await xml2js(pom, {})) as Element;

    // Mutate dependencies
    const nameParts = packageName.split(".");
    const groupId = nameParts.slice(0, nameParts.length - 1).join(".");
    const artifactId = nameParts[nameParts.length - 1];

    const newDependency = (await xml2js(
      `<dependency>
    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${packageVersion}</version>
</dependency>`
    )) as Element;

    pomXml.elements
      ?.find((el) => el.name === "project")
      ?.elements?.find((el) => el.name === "dependencies")
      ?.elements?.push(newDependency.elements![0]);

    // Write new pom.xml
    await fs.writeFile(pomPath, js2xml(pomXml, { spaces: 2 }));

    // Install
    await exec("mvn", ["install"], { cwd: this.workingDirectory });
    console.log("Package installed.");
  }
}

class GoPackageManager extends PackageManager {
  public async addPackage(
    packageName: string,
    packageVersion?: string
  ): Promise<void> {
    console.log(`Adding package ${packageName} @ ${packageVersion}`);

    const majorVersion: number | undefined = packageVersion
      ? semver.major(packageVersion)
      : undefined;

    let versionPackageSuffix = "";
    if (typeof majorVersion === "number" && majorVersion > 1) {
      versionPackageSuffix = `/v${majorVersion}`;
    }

    // Install
    await exec(
      "go",
      ["get", `${packageName}${versionPackageSuffix}@v${packageVersion}`],
      {
        cwd: this.workingDirectory,
      }
    );

    console.log("Package installed.");
  }
}
