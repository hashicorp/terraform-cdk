// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as Sentry from "@sentry/node";
import {
  getProjectId,
  getUserId,
  collectDebugInformation,
  DISPLAY_VERSION,
} from "@cdktf/commons";
import { logger } from "@cdktf/commons";
import * as path from "path";
import * as fs from "fs-extra";
import ciDetect from "@npmcli/ci-detect";

export function shouldReportCrash(
  projectPath = process.cwd()
): boolean | undefined {
  try {
    const cdktfJson = JSON.parse(
      fs.readFileSync(path.resolve(projectPath, "cdktf.json"), "utf8")
    );

    return typeof cdktfJson.sendCrashReports === "boolean"
      ? cdktfJson.sendCrashReports
      : cdktfJson.sendCrashReports === "true";
  } catch (e) {
    logger.debug(
      `Error determining if crash reporting should be enabled, defaulting to false: ${e}`
    );
    return false;
  }
}

export function persistReportCrashReportDecision(
  decision: boolean,
  projectPath = process.cwd()
) {
  const cdktfJson = JSON.parse(
    fs.readFileSync(path.resolve(projectPath, "cdktf.json"), "utf8")
  );
  cdktfJson.sendCrashReports = decision;
  fs.writeFileSync(
    path.resolve(projectPath, "cdktf.json"),
    JSON.stringify(cdktfJson, null, 2)
  );
}

function isPromise(p: any): p is Promise<any> {
  return (
    typeof p === "object" &&
    typeof p.then === "function" &&
    typeof p.catch === "function"
  );
}

export async function initializErrorReporting(
  runConsentPrompt?: () => Promise<boolean>
) {
  let shouldReport = shouldReportCrash();
  const ci: string | false = ciDetect();

  // We have no info yet, so we need to ask the user
  if (shouldReport === undefined && runConsentPrompt) {
    // But only if it's a user
    if (ci) {
      return;
    }

    shouldReport = await runConsentPrompt();
    persistReportCrashReportDecision(shouldReport);
  }

  if (!shouldReport) {
    logger.debug("Error reporting disabled");
    return;
  }
  if (!process.env.SENTRY_DSN) {
    logger.info("Error reporting disabled: SENTRY_DSN not set");
    return;
  }

  logger.debug("Initializing error reporting");

  Sentry.init({
    autoSessionTracking: true,
    dsn: process.env.SENTRY_DSN,
    release: `cdktf-cli-${DISPLAY_VERSION}`,
    async beforeSend(event, hint) {
      if (!hint) {
        return event;
      }

      // The promise character is not documented, but it happens
      const originalException:
        | Promise<Error>
        | Error
        | string
        | null
        | undefined = hint.originalException;
      let error: Error | string | null | undefined;
      if (isPromise(originalException)) {
        (originalException as unknown as Promise<Error>).catch(
          (e) => (error = e)
        );
        await Promise.allSettled([originalException]);
      } else {
        error = originalException;
      }

      const errorMessage = error?.toString() || "";
      if (errorMessage.includes("Usage Error")) {
        // This is a usage error, so we don't want to report it
        return null;
      }
      return event;
    },
  });

  Sentry.configureScope(function (scope) {
    scope.setUser({
      id: getUserId(),
    });
    scope.setTag("projectId", getProjectId());
  });

  logger.debug("Collecting environment information for error reporting");
  collectDebugInformation().then((debugOutput) => {
    Sentry.setContext("environment", debugOutput);
  });
}

export function captureException({
  message,
  type,
  command,
  context,
}: {
  message: string;
  type: string;
  command: string;
  context?: Record<string, any>;
}) {
  if (process.env.SENTRY_DSN && shouldReportCrash()) {
    Sentry.captureException(new Error(message), {
      tags: {
        context: JSON.stringify(context),
        type,
        command,
      },
    });
  }
}
