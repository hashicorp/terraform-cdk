import https = require("https");
import { format } from "url";
import { v4 as uuidv4 } from "uuid";
import * as os from "os";
import ciDetect from "@npmcli/ci-detect";
import { logger, processLoggerError } from "./logging";
import * as path from "path";
import * as fs from "fs-extra";
import { DISPLAY_VERSION } from "./version";
import { homeDir } from "../bin/cmds/helper/version-check";
import { CHECKPOINT_DISABLE } from "./environment";

const BASE_URL = `https://checkpoint-api.hashicorp.com/v1/`;

const VALID_STATUS_CODES = [200, 201];

export interface ReportParams {
  dateTime?: Date;
  arch?: string;
  os?: string;
  payload: Record<string, any>;
  product: string;
  runID?: string;
  version?: string;
  command?: string;
  language?: string;
  userId?: string;
  ci?: string;
  projectId?: string;
}

async function post(url: string, data: string) {
  return new Promise<void>((ok, ko) => {
    const req = https.request(
      format(url),
      {
        headers: {
          Accept: "application/json",
          "Content-Length": data.length,
          "User-Agent": "HashiCorp/cdktf-cli",
        },
        method: "POST",
      },
      (res) => {
        if (res.statusCode) {
          const statusCode = res.statusCode;
          if (!VALID_STATUS_CODES.includes(statusCode)) {
            return ko(new Error(res.statusMessage));
          }
        }
        const data = new Array<Buffer>();
        res.on("data", (chunk) => data.push(chunk));
        res.on("error", (err) => ko(err));
        res.on("end", () => {
          return ok();
        });
      }
    );

    req.setTimeout(1000, () => ko(new Error("request timeout")));
    req.write(data);
    req.end();
    req.on("error", (err) => ko(err));
  });
}

export async function sendTelemetry(
  command: string,
  payload: Record<string, any>
) {
  const reportParams: ReportParams = {
    command,
    product: "cdktf",
    version: `${DISPLAY_VERSION}`,
    dateTime: new Date(),
    language: payload.language,
    payload,
  };

  try {
    await ReportRequest(reportParams);
  } catch (err) {
    logger.error(`Could not send telemetry data: ${err}`);
  }
}

function getId(
  filePath: string,
  key: string,
  forceCreation = false,
  explanatoryComment?: string
): string {
  const _uuid = uuidv4(); // create a new UUID in case we don't find one

  let jsonFile;
  try {
    jsonFile = require(filePath); // we found the file
  } catch {
    // we found no file, create one if we're forcing a creation
    if (forceCreation) {
      const _idFile = {} as Record<string, string>; // compose JSON id file in case we don't find one
      if (explanatoryComment) {
        _idFile["//"] = explanatoryComment.replace(/\n/g, " ");
      }
      _idFile[key] = _uuid;
      fs.ensureDirSync(path.dirname(filePath));
      fs.writeFileSync(filePath, JSON.stringify(_idFile, null, 2));
    }
    return _uuid;
  }

  if (jsonFile[key]) {
    return jsonFile[key]; // we found an id
  } else {
    // we found no id, we add it to the file for future use
    fs.writeFileSync(
      filePath,
      JSON.stringify({ ...jsonFile, [key]: _uuid }, null, 2)
    );
    return _uuid;
  }
}

export function getProjectId(projectPath = process.cwd()): string {
  return getId(path.resolve(projectPath, "cdktf.json"), "projectId");
}

export function getUserId(): string {
  return getId(
    path.resolve(homeDir(), "config.json"),
    "userId",
    true,
    `This signature is a randomly generated UUID used to anonymously differentiate users in telemetry data order to inform product direction.
This signature is random, it is not based on any personally identifiable information.
To create a new signature, you can simply delete this file at any time.
See https://cdk.tf/telemetry for more
information on how to disable it.`
  );
}

export async function ReportRequest(reportParams: ReportParams): Promise<void> {
  // we won't report when checkpoint is disabled.
  if (CHECKPOINT_DISABLE) {
    return;
  }

  if (!reportParams.runID) {
    reportParams.runID = uuidv4();
  }

  if (!reportParams.dateTime) {
    reportParams.dateTime = new Date();
  }

  if (!reportParams.arch) {
    reportParams.arch = os.arch();
  }

  if (!reportParams.os) {
    reportParams.os = os.platform();
  }

  const ci: string | false = ciDetect();
  if (!reportParams.userId && !ci) {
    reportParams.userId = getUserId();
  }

  if (ci) {
    reportParams.ci = ci;
  }

  reportParams.projectId = reportParams.projectId || getProjectId();

  const postData = JSON.stringify(reportParams);

  try {
    await post(`${BASE_URL}telemetry/${reportParams.product}`, postData);
  } catch (e) {
    // Log errors writing to checkpoint
    processLoggerError(e.message);
  }
}
