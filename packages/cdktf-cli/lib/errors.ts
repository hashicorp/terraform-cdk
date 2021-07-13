import { ReportParams, ReportRequest } from "./checkpoint";
import { versionNumber } from "../bin/cmds/version-check";

// Errors that will emit telemetry events
async function report(command: string, payload: Record<string, any>) {
  const reportParams: ReportParams = {
    command,
    product: "cdktf",
    version: versionNumber(),
    dateTime: new Date(),
    payload,
  };

  await ReportRequest(reportParams);
}

function reportPrefixedError(type: string) {
  return (command: string, message: string, context: Record<string, any>) => {
    report(command, { ...context, message, type });
    const err: any = new Error(`${type} Error: ${message}`);
    Object.entries(context).forEach(([key, value]) => {
      err[key] = value;
    });
    return err;
  };
}

export const Errors = {
  // Error within our control
  Internal: reportPrefixedError("Internal"),
  // Error in the usage
  Usage: reportPrefixedError("Usage"),
};
