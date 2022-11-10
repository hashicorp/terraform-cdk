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
import * as z from "zod";
import { logger } from "../logging";

// {
//   "version": "1.0.0",
//   "name": "testUSHasF",
//   "problems": [
//     "extraneous: archiver-utils@2.1.0 /private/var/folders/z_/v03l33d55fb57nrr3b1q03ch0000gq/T/testUSHasF/node_modules/archiver-utils",
//   ],
//   "dependencies": {
//     "@cdktf/provider-random": {
//       "version": "3.0.11",
//       "resolved": "https://registry.npmjs.org/@cdktf/provider-random/-/provider-random-3.0.11.tgz"
//     },
const npmListSchema = z
  .object({
    dependencies: z.record(
      z
        .object({
          version: z.string(),
        })
        .nonstrict()
    ),
  })
  .deepPartial()
  .nonstrict();

// {
//   "type": "tree",
//   "data": {
//     "type": "list",
//     "trees": [
//       {
//         "name": "@cdktf/provider-random@3.0.11",
//         "children": [],
//         "hint": null,
//         "color": "bold",
//         "depth": 0
//       }
//     ]
//   }
// }
const yarnListSchema = z
  .object({
    data: z
      .object({
        trees: z.array(
          z
            .object({
              name: z.string(),
            })
            .nonstrict()
        ),
      })
      .nonstrict(),
  })
  .deepPartial()
  .nonstrict();

// [
//   {
//     "name": "appdirs",
//     "version": "1.4.4"
//   },
//   {
const pipPackageSchema = z.array(
  z.object({ name: z.string(), version: z.string() }).nonstrict()
);

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
  // add check if package exists already. might query version in the future and offer to upgrade?

  public abstract isNpmVersionAvailable(
    packageName: string,
    packageVersion: string
  ): Promise<boolean>;

  public abstract listProviderPackages(): Promise<
    { name: string; version: string }[]
  >;
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

    // Install exact version
    // Yarn: https://classic.yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-exact-e
    // Npm: https://docs.npmjs.com/cli/v8/commands/npm-install#save-exact
    args.push("-E");

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

  private async listYarnPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const stdout = await exec("yarn", ["list", "--json"], {
        cwd: this.workingDirectory,
      });

      logger.debug(`Listing yarn packages using "yarn list --json": ${stdout}`);

      const json = yarnListSchema.parse(JSON.parse(stdout));

      return (json?.data?.trees || [])
        .filter((dep: any) => dep.name.startsWith("@cdktf/provider-"))
        .map((dep: any) => ({
          name: `@${dep.name.split("@")[1]}`,
          version: dep.name.split("@")[2],
        }));
    } catch (e) {
      throw new Error(
        `Could not determine installed packages using 'yarn list --json': ${e.message}`
      );
    }
  }

  private async listNpmPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const stdout = await exec("npm", ["list", "--json"], {
        cwd: this.workingDirectory,
      });

      logger.debug(`Listing npm packages using "npm list --json": ${stdout}`);
      const json = npmListSchema.parse(JSON.parse(stdout));

      return Object.entries(json?.dependencies || {})
        .filter(([depName]) => depName.startsWith("@cdktf/provider-"))
        .map(([name, dep]) => ({ name, version: dep.version }));
    } catch (e) {
      throw new Error(
        `Could not determine installed packages using 'npm list --json': ${e.message}`
      );
    }
  }

  public async listProviderPackages(): Promise<
    { name: string; version: string }[]
  > {
    return this.hasYarnLockfile()
      ? this.listYarnPackages()
      : this.listNpmPackages();
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
      const requirementLine = requirements
        .split("\n")
        .find((line) => line.includes(packageName));

      logger.debug(
        `Read requirements.txt file and found line including ${packageName}: ${requirementLine}`
      );

      if (requirementLine) {
        if (packageVersion ? requirementLine.includes(packageVersion) : true) {
          logger.info(
            `Package ${packageName} already installed. Skipping installation.`
          );
          return;
        } else {
          logger.debug(
            `Found the package but with a different version, continuing`
          );
        }
      }

      const newRequirements =
        requirements
          .split("\n")
          .filter((line) => !line.startsWith(packageName))
          .join("\n") +
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

  public async listPipenvPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const stdout = await exec(
        "pipenv",
        ["run", "pip", "list", "--format=json"],
        {
          cwd: this.workingDirectory,
        }
      );
      logger.debug(
        `Listing pipenv packages using "pipenv run pip list --format=json": ${stdout}`
      );

      const list = pipPackageSchema.parse(JSON.parse(stdout));
      return list.filter((item) =>
        item.name.startsWith("cdktf-cdktf-provider")
      );
    } catch (e) {
      throw new Error(
        `Could not determine installed packages using 'pipenv run pip list --format=json': ${e.message}`
      );
    }
  }

  public async listPipPackages(): Promise<{ name: string; version: string }[]> {
    try {
      const stdout = await exec("pip", ["list", "--format=json"], {
        cwd: this.workingDirectory,
      });
      logger.debug(
        `Listing pipenv packages using "pip list --format=json": ${stdout}`
      );

      const list = pipPackageSchema.parse(JSON.parse(stdout));
      return list.filter((item) =>
        item.name.startsWith("cdktf-cdktf-provider")
      );
    } catch (e) {
      throw new Error(
        `Could not determine installed packages using 'pip list --format=json': ${e.message}`
      );
    }
  }

  public async listProviderPackages(): Promise<
    { name: string; version: string }[]
  > {
    return this.appCommand.includes("pipenv")
      ? this.listPipenvPackages()
      : this.listPipPackages();
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

  public async listProviderPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const stdout = await exec("dotnet", ["list", "package"], {
        cwd: this.workingDirectory,
      });
      logger.debug(
        `Listing pipenv packages using "dotnet list package": ${stdout}`
      );

      const regex =
        /^\s*>\s(HashiCorp\.Cdktf\.Providers\.[\w.]+)\s+((?:\d+\.){2}\d+(?:-\S+)?)\s+((?:\d+\.){2}\d+(?:-\S+)?)\s*$/;

      return stdout
        .split("\n")
        .map((line) => {
          // Example output:
          // Project 'MyTerraformStack' has the following package references
          //  [netcoreapp3.1]:
          //  Top-level Package      Requested   Resolved
          //  > HashiCorp.Cdktf      0.0.0       0.0.0
          // match[0] = full match
          // match[1] = package name
          // match[2] = requested version
          // match[3] = resolved version
          return regex.exec(line);
        })
        .filter((match) => !!match)
        .map((match) => ({ name: match![1], version: match![3] }));
    } catch (e) {
      throw new Error(
        `Could not determine installed packages using 'dotnet list package': ${e.message}`
      );
    }
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

    const dependencies = pomXml.elements
      ?.find((el) => el.name === "project")
      ?.elements?.find((el) => el.name === "dependencies");

    if (!dependencies) {
      throw Errors.Usage(`Could not find dependencies section in the pom.xml`);
    }
    dependencies.elements = (dependencies?.elements || []).filter(
      (el) =>
        el.elements?.some(
          (group) =>
            group.name === "groupId" && group.elements?.[0].text !== groupId
        ) ||
        el.elements?.some(
          (artifact) =>
            artifact.name === "artifactId" &&
            artifact.elements?.[0].text !== artifactId
        )
    );
    dependencies?.elements?.push(newDependency.elements![0]);

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

  public async listProviderPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const pomPath = path.join(this.workingDirectory, "pom.xml");
      if (!existsSync(pomPath)) {
        throw Errors.Usage(
          "No pom.xml found in current working directory. Please run the command from the root of your project."
        );
      }

      const pom = await fs.readFile(pomPath, "utf8");
      const pomXml = (await xml2js(pom, {})) as Element;

      const dependencies =
        pomXml.elements
          ?.find((el) => el.name === "project")
          ?.elements?.find((el) => el.name === "dependencies")?.elements ?? [];

      return dependencies
        .map((dep) => ({
          name: `${
            dep.elements?.find((el) => el.name === "groupId")?.elements?.[0]
              .text
          }.${
            dep.elements?.find((el) => el.name === "artifactId")?.elements?.[0]
              .text
          }`,
          version: dep.elements?.find((el) => el.name === "version")
            ?.elements?.[0].text as string,
        }))
        .filter((dep) => dep.name.startsWith("com.hashicorp.cdktf-provider-"));
    } catch (e) {
      throw new Error(
        `Could not determine installed packages reading the pom.xml: ${e.message}`
      );
    }
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

    logger.debug(
      `Running 'go get ${packageName}${versionPackageSuffix}@v${packageVersion}'`
    );
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

  public async listProviderPackages(): Promise<
    { name: string; version: string }[]
  > {
    try {
      const goSumPath = path.join(this.workingDirectory, "go.sum");
      if (!existsSync(goSumPath)) {
        throw Errors.Usage(
          "No go.sum found in current working directory. Please run the command from the root of your project."
        );
      }

      const goSum = await fs.readFile(goSumPath, "utf8");

      return goSum
        .split("\n")
        .filter(
          (line) =>
            line.startsWith("github.com/hashicorp/cdktf-provider") ||
            line.startsWith("github.com/cdktf/cdktf-provider")
        )
        .map((line) => {
          const parts = line.split(" ");
          if (parts.length !== 3) {
            throw Errors.Internal(
              `Expected line in go.sum to be in the format of '<package> <version> <checksum>', got: ${line}`
            );
          }

          // part[0] could be github.com/aws/constructs-go/constructs/v10
          const name = parts[0].split("/").slice(0, 4).join("/");

          const version = parts[1].split("/")[0];

          return {
            name,
            version,
          };
        });
    } catch (e) {
      throw new Error(
        `Could not determine installed packages reading the go.sum: ${e.message}`
      );
    }
  }
}
