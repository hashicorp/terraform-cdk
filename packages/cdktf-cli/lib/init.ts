import * as path from "path";
import * as fs from "fs-extra";
import { readPackageJson } from "../bin/cmds/helper/utilities";
import { Errors } from "./errors";

import { sscaff } from "sscaff";
import { FUTURE_FLAGS } from "cdktf/lib/features";

const pkg = readPackageJson();
const constructsVersion = pkg.dependencies.constructs;

export interface Project {
  Description: string;
  Name: string;
  OrganizationName: string;
  WorkspaceName: string;
}
export type InitArgs = {
  cdktfVersion?: string;
  destination: string;
  dist?: string;
  projectId: string;
  projectInfo: Project;
  templatePath: string;
};

export async function init({
  cdktfVersion,
  destination,
  dist,
  projectId,
  projectInfo,
  templatePath,
}: InitArgs) {
  const deps: any = await determineDeps(cdktfVersion, dist);

  const futureFlags = Object.entries(FUTURE_FLAGS)
    .map(([key, value]) => `"${key}": "${value}"`)
    .join(`,\n`);

  await sscaff(templatePath, destination, {
    ...deps,
    ...projectInfo,
    futureFlags,
    projectId,
  });
}

export interface Deps {
  npm_cdktf: string;
  npm_cdktf_cli: string;
  pypi_cdktf: string;
  mvn_cdktf: string;
  nuget_cdktf: string;
  go_cdktf: string;
  cdktf_version: string;
  constructs_version: string;
}
export async function determineDeps(
  version: string = pkg.version,
  dist?: string
): Promise<Deps> {
  const pythonVersion = version.replace(/-pre\./g, ".dev");

  if (dist) {
    const ret = {
      npm_cdktf: path.resolve(dist, "js", `cdktf@${version}.jsii.tgz`),
      npm_cdktf_cli: path.resolve(dist, "js", `cdktf-cli-${version}.tgz`),
      pypi_cdktf: path.resolve(dist, "python", `cdktf-${pythonVersion}.tar.gz`),
      mvn_cdktf: path.resolve(
        dist,
        "java",
        `com/hashicorp/cdktf/${version}/cdktf-${version}.jar`
      ),
      nuget_cdktf: path.resolve(
        dist,
        "dotnet",
        `HashiCorp.Cdktf.${version}.nupkg`
      ),
      go_cdktf: path.resolve(dist, "go", `cdktf`),
    };

    for (const file of Object.values(ret)) {
      if (!(await fs.pathExists(file))) {
        throw Errors.Internal(
          "init",
          `unable to find ${file} under the "dist" directory (${dist})`,
          { version }
        );
      }
    }

    const versions = {
      cdktf_version: version,
      constructs_version: constructsVersion,
    };

    return {
      ...ret,
      ...versions,
    };
  }

  if (version === "0.0.0") {
    throw Errors.Usage(
      "init",
      `cannot use version 0.0.0, use --cdktf-version, --dist or CDKTF_DIST to install from a "dist" directory`,
      {}
    );
  }

  // determine if we want a specific pinned version or a version range we take
  // a pinned version if version includes a hyphen which means it is a
  // pre-release (e.g. "0.12.0-pre.e6834d3"). otherwise, we require a caret
  // version.
  const ver = version.includes("-") ? version : `^${version}`;

  return {
    cdktf_version: version,
    constructs_version: constructsVersion,
    npm_cdktf: `cdktf@${ver}`,
    npm_cdktf_cli: `cdktf-cli@${ver}`,
    pypi_cdktf: `cdktf~=${pythonVersion}`,
    mvn_cdktf: version,
    nuget_cdktf: version,
    go_cdktf: `v${version}`,
  };
}
