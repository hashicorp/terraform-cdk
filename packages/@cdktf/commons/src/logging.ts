// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { configure, getLogger } from "log4js";
import * as fs from "fs-extra";
import * as path from "path";
import * as Sentry from "@sentry/node";
import { hasNoColorFlagOrEnv } from "./util";

const cliLogger = getLogger();
const logger = {
  trace(message: any, ...args: any[]) {
    cliLogger.trace(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "debug",
    });
  },

  debug(message: any, ...args: any[]) {
    cliLogger.debug(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "debug",
    });
  },

  info(message: any, ...args: any[]) {
    cliLogger.info(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "info",
    });
  },

  warn(message: any, ...args: any[]) {
    cliLogger.warn(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "warning",
    });
  },

  error(message: any, ...args: any[]) {
    cliLogger.error(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "error",
    });
  },

  fatal(message: any, ...args: any[]) {
    cliLogger.fatal(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: "fatal",
    });
  },

  setLevel(level: string) {
    cliLogger.level = level;
  },

  useDefaultLevel() {
    cliLogger.level = process.env.CDKTF_LOG_LEVEL || "INFO";
  },
};

cliLogger.level = process.env.CDKTF_LOG_LEVEL || "INFO";
const logFileName = "cdktf.log";

if (
  process.env.CDKTF_LOG_FILE_DIRECTORY &&
  fs.existsSync(process.env.CDKTF_LOG_FILE_DIRECTORY) &&
  fs.statSync(process.env.CDKTF_LOG_FILE_DIRECTORY).isDirectory()
) {
  configure({
    appenders: {
      cdktf: {
        type: "file",
        filename: path.join(process.env.CDKTF_LOG_FILE_DIRECTORY, logFileName),
      },
    },
    categories: { default: { appenders: ["cdktf"], level: "debug" } },
  });
} else {
  const layoutType = hasNoColorFlagOrEnv() ? "basic" : "colored";

  configure({
    appenders: { out: { type: "stdout", layout: { type: layoutType } } },
    categories: { default: { appenders: ["out"], level: "info" } },
  });
}

const processLoggerDebug = (chunk: Buffer | string | Uint8Array) => {
  logger.debug(chunk.toString());
};
const processLoggerError = (chunk: Buffer | string | Uint8Array) => {
  logger.error(chunk.toString());
};

export { logger, processLoggerDebug, processLoggerError, logFileName };
