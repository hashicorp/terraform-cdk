import { configure, getLogger } from "log4js";
import * as fs from "fs-extra";
import * as path from "path";

const logger = getLogger();

logger.level = process.env.CDKTF_LOG_LEVEL || "INFO";
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

export {
  logger,
  getLogger,
  processLoggerDebug,
  processLoggerError,
  logFileName,
};
