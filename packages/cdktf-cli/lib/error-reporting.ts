import * as Sentry from "@sentry/node";
import { getProjectId, getUserId } from "./checkpoint";
import { collectDebugInformation } from "./debug";
import { logger } from "./logging";
import * as path from "path";
import * as fs from "fs-extra";
import ciDetect from "@npmcli/ci-detect";
import inquirer from "inquirer";
import { DISPLAY_VERSION } from "./version";

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

export async function askForCrashReportingConsent() {
  const answer: { reportCrash: boolean } = await inquirer.prompt({
    name: "reportCrash",
    message:
      "Do you want to send crash reports to the CDKTF team? See https://www.terraform.io/cdktf/create-and-deploy/configuration-file for more information",
    type: "confirm",
    default: true,
  });

  return answer.reportCrash;
}

export async function initializErrorReporting(askForConsent = false) {
  let shouldReport = shouldReportCrash();
  const ci: string | false = ciDetect();

  // We have no info yet, so we need to ask the user
  if (shouldReport === undefined && askForConsent) {
    // But only if it's a user
    if (ci) {
      return;
    }

    shouldReport = await askForCrashReportingConsent();
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
