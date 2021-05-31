import { configure, getLogger } from "log4js";
const { CDKTF_DISABLE_LOGGING, CDKTF_LOG_LEVEL } = process.env;
const IS_LOGGING_ENABLED = CDKTF_DISABLE_LOGGING === "false"
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => {};
const nullLogger = {
  debug: noOp,
  error: noOp,
  info: noOp,
  level: "",
  trace: noOp,
};

const logger = IS_LOGGING_ENABLED ? getLogger() : nullLogger;

logger.level = CDKTF_LOG_LEVEL || "INFO";

configure({
  appenders: { cdktf: { type: "file", filename: "./cdktf.log" } },
  categories: { default: { appenders: ["cdktf"], level: "debug" } },
});

const processLogger = (chunk: Buffer | string | Uint8Array) => {
  logger.debug(chunk.toString());
};

const processErrorLogger = (chunk: Buffer | string | Uint8Array) => {
  logger.error(chunk.toString());
};

export { logger, getLogger, processLogger, processErrorLogger };
