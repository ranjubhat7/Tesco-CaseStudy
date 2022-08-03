import winston from "winston";

// Logger Configuration
export const logConfiguration = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: "info",
      filename: "logs/serverActivity.log",
    },{
      level: "error",
      filename: "logs/serverErrorActivity.log",
    }),
  ],
};
