// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Language } from "@cdktf/provider-generator";
import { existsSync } from "fs-extra";
import path from "path";
import { exec } from "../util";
import { xml2js, js2xml, Element } from "xml-js";
import { Errors } from "../errors";
import * as fs from "fs-extra";
import * as semver from "semver";
import fetch from "node-fetch";
import { logger } from "../logging";

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

  public abstract isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean>;
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

  public async isNpmVersionAvailable(
    _packageName: string,
    _packageVersion: string
  ): Promise<boolean> {
    // We get the list of available versions from npm, no need to check here
    return true;
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

  public async isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean> {
    logger.debug(
      `Checking if ${packageName}@${packageVersion} is available for Python`
    );
    const url = `https://pypi.org/pypi/${packageName}/${packageVersion}/json`;
    logger.debug(`Fetching package information for ${packageName} from ${url}`);

    const response = await fetch(url);
    const json = await response.json();
    logger.debug(
      `Got response from PyPI for ${packageName}@${packageVersion}: ${JSON.stringify(
        json
      )}`
    );

    if (json.info) {
      // We found the version, so it exists
      return true;
    } else {
      logger.debug(
        `Could not get PyPI package info, got: ${JSON.stringify(json)}`
      );
      return false;
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

  public async isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean> {
    logger.debug(`Checking if ${packageName}@${packageVersion} is available`);

    const [owner, ...rest] = packageName.split(".");
    const id = rest[rest.length - 1];
    const url = `https://azuresearch-usnc.nuget.org/query?q=owner:${owner}%20id:${id}&prerelease=false&semVerLevel=2.0.0`;
    logger.debug(`Fetching package metadata from Nuget: '${url}'`);

    const response = await fetch(url);
    const json = (await response.json()) as {
      data: { id: string; versions: { version: string }[] }[];
    };
    logger.debug(
      `Got response from NuGet for ${packageName} : ${JSON.stringify(json)}`
    );

    if (!json?.data?.length) {
      return false; // No package found
    }

    const packageVersions =
      json.data.find((p) => p.id === packageName)?.versions ?? [];

    if (!packageVersions.length) {
      return false; // No package release matching the id found
    }

    return packageVersions.some((v) => v.version === packageVersion);
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

  public async isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean> {
    logger.debug(`Checking if ${packageName}@${packageVersion} is available`);

    const parts = packageName.split(".");
    if (parts.length !== 3) {
      throw Errors.Internal(
        `Expected package name to be in format "group.artifact", e.g. "com.hashicorp.cdktf-provider-google", got: ${packageName}`
      );
    }

    const packageIdentifier = parts.pop();
    const groupId = parts.join(".");

    const url = `https://search.maven.org/solrsearch/select?q=g:${groupId}+AND+a:${packageIdentifier}+AND+v:${packageVersion}&rows=5&wt=json`;
    logger.debug(
      `Trying to find package version by querying Maven Central under '${url}'`
    );
    const response = await fetch(url);

    const json = await response.json();
    logger.debug(
      `Got response from the Maven package search for ${packageName}: ${JSON.stringify(
        json
      )}`
    );

    return (json?.response?.numFound ?? 0) > 0;
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

  public async isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean> {
    logger.debug(`Checking if ${packageName}@${packageVersion} is available`);

    // e.g. github.com/cdktf/cdktf-provider-google-go/google
    const parts = packageName.split("/");
    if (parts.length !== 4) {
      throw Errors.Internal(
        `Expecting Go package name to be in the format of github.com/<org>/<repo>/<package>, got ${packageName}`
      );
    }

    const org = parts[1];
    const repo = parts[2];
    const packagePath = parts[3];

    const url = `https://api.github.com/repos/${org}/${repo}/git/ref/tags/${packagePath}/v${packageVersion}`;
    logger.debug(`Fetching tags for ${org}/${repo} from '${url}'`);
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    const json = await response.json();
    logger.debug(
      `Got response from GitHubs repository tag endpoint for ${packageName}: ${JSON.stringify(
        json
      )}`
    );

    if (json && json.ref) {
      return true;
    }

    logger.info(
      `Could not find the tag ${packagePath}/v${packageVersion} in the repository ${org}/${repo}: ${JSON.stringify(
        json
      )}}`
    );

    return false;
  }
}
