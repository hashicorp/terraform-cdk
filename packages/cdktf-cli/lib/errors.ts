import { ReportParams, ReportRequest } from "./checkpoint";
import { DISPLAY_VERSION } from "./version";
import * as Sentry from "@sentry/node";

// Errors that will emit telemetry events
async function report(command: string, payload: Record<string, any>) {
  const reportParams: ReportParams = {
    command,
    product: "cdktf",
    version: `${DISPLAY_VERSION}`,
    dateTime: new Date(),
    payload,
  };

  await ReportRequest(reportParams);
}

type ErrorType = "Internal" | "External" | "Usage";
export function IsErrorType(error: any, type: ErrorType): boolean {
  return error && error.__type === type;
}

function reportPrefixedError(type: ErrorType, command: string) {
  return (message: string, context?: Record<string, any>) => {
    report(command, { ...context, message, type });
    const err: any = new Error(`${type} Error: ${message}`);
    Object.entries(context || {}).forEach(([key, value]) => {
      err[key] = value;
    });
    err.__type = type;
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
  // Error outside of our control (e.g. terraform failed)
  External: reportPrefixedError("External", errorScope),

  // Set the scope for all errors
  setScope(scope: string) {
    errorScope = scope;
    Sentry.configureScope((s) => s.setTransactionName(scope));
  },
};
