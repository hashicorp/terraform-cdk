// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { configure, getLogger } from "log4js";
import * as fs from "fs-extra";
import * as path from "path";
import * as Sentry from "@sentry/node";

import { setLogger as setProviderGeneratorLogger } from "@cdktf/provider-generator";
import { setLogger as setHclLogger } from "@cdktf/hcl2cdk";

const cliLogger = getLogger();
const logger = {
  trace(message: any, ...args: any[]) {
    cliLogger.trace(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Debug,
    });
  },

  debug(message: any, ...args: any[]) {
    cliLogger.debug(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Debug,
    });
  },

  info(message: any, ...args: any[]) {
    cliLogger.info(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Info,
    });
  },

  warn(message: any, ...args: any[]) {
    cliLogger.warn(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Warning,
    });
  },

  error(message: any, ...args: any[]) {
    cliLogger.error(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Error,
    });
  },

  fatal(message: any, ...args: any[]) {
    cliLogger.fatal(message, ...args);
    Sentry.addBreadcrumb({
      message,
      level: Sentry.Severity.Critical,
    });
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
}

const processLoggerDebug = (chunk: Buffer | string | Uint8Array) => {
  logger.debug(chunk.toString());
};
const processLoggerError = (chunk: Buffer | string | Uint8Array) => {
  logger.error(chunk.toString());
};

// We have this mechanism to allow loggers from sub-packages to hook into this logging mechanism
setHclLogger(logger as any);
setProviderGeneratorLogger(logger as any);

export { logger, processLoggerDebug, processLoggerError, logFileName };
