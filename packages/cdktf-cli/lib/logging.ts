import { configure, getLogger } from "log4js";

const logger = getLogger();

logger.level = process.env.CDKTF_LOG_LEVEL || 'INFO';

if (process.env.CDKTF_DISABLE_LOGGING === 'false') {
  configure({
    appenders: { cdktf: { type: "file", filename: "./cdktf.log" } },
    categories: { default: { appenders: ["cdktf"], level: "debug" } }
  });
}

const processLogger = (chunk: Buffer | string | Uint8Array) => {
  logger.debug(chunk.toString())
}

export {
  logger,
  getLogger,
  processLogger
}
