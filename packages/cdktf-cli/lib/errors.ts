import { ReportParams, ReportRequest } from "./checkpoint";
import { versionNumber } from "../bin/cmds/helper/version-check";

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

function reportPrefixedError(type: string, command: string) {
  return (message: string, context?: Record<string, any>) => {
    report(command, { ...context, message, type });
    const err: any = new Error(`${type} Error: ${message}`);
    Object.entries(context || {}).forEach(([key, value]) => {
      err[key] = value;
    });
    return err;
  };
}

// The CLI only deals with one command at a time, so we can just use the same
// scope for all errors and set it once during initialization.
let errorScope = "unknown";
export const Errors = {
  // Error within our control
  Internal: reportPrefixedError("Internal", errorScope),
  // Error in the usage
  Usage: reportPrefixedError("Usage", errorScope),

  // Set the scope for all errors
  setScope(scope: string) {
    errorScope = scope;
  },
};
