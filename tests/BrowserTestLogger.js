const winston = require('winston');

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;

/**
 * Creates our own log format
 */
const e2eFormat = printf((info) => {
  // Create a JSON string of the log line, removing anything from info
  // which we will print using Object assign
  const stringifiedRestOfLog = JSON.stringify(
    Object.assign({}, info, {
      level: undefined,
      message: undefined,
      timestamp: undefined,
      class: undefined
    })
  );

  const classname = `${(info.class || '').padEnd(20)}`;
  const level = `${info.level.toUpperCase().padEnd(6)}`;

  // If there is a json body
  if (stringifiedRestOfLog !== '{}') {
    return `${info.timestamp} ${classname} ${level}${info.message} ${stringifiedRestOfLog}`;
  } else {
    return `${info.timestamp} ${classname} ${level}${info.message}`;
  }
});

const logger = createLogger({
  // default log level for this log
  level: process.env.URL === 'https://localhost:8080/' || process.env.LOG_DEBUG ? 'debug' : 'info',
  format: combine(
    // combine multiple formatting functions
    timestamp(), // includes the timestamp for the log event
    format.splat(), // support for %d and %s logs
    e2eFormat 
  ),
  transports: [new transports.Console()] // write logs to the console
});

module.exports = {
  logger: logger
};