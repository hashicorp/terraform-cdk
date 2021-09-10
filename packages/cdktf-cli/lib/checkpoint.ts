import https = require("https");
import { format } from "url";
import { v4 as uuidv4 } from "uuid";
import * as os from "os";
import { logger, processLoggerError } from "./logging";
import { versionNumber } from "../bin/cmds/helper/version-check";

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
    version: versionNumber(),
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

export async function ReportRequest(reportParams: ReportParams): Promise<void> {
  // we won't report when checkpoint is disabled.
  if (process.env.CHECKPOINT_DISABLE) {
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

  const postData = JSON.stringify(reportParams);

  try {
    await post(`${BASE_URL}telemetry/${reportParams.product}`, postData);
  } catch (e) {
    // Log errors writing to checkpoint
    processLoggerError(e.message);
  }
}
