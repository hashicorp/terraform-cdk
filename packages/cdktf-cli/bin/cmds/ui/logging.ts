import { configure, getLogger } from "log4js";

const logger = getLogger();

logger.level = process.env.LOG_LEVEL || 'debug';

configure({
  appenders: { cdktf: { type: "file", filename: "./cdktf.log" } },
  categories: { default: { appenders: ["cdktf"], level: "debug" } }
});

export {
  logger,
  getLogger,
}
