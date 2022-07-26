//import dependencies
import express from "express";
import winston from "winston";
import "dotenv/config";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/user";

const app = express();

userRoutes(app);

// Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "karma Rewards",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

// config objects
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: "info",
      filename: "logs/serverActivity.log",
    }),
  ],
};
const logger = winston.createLogger(logConfiguration);

// using all middle tiers

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.disable("x-powered-by");

app.listen(process.env.PORT, async (req, res) => {
  logger.log("info", "server started at " + process.env.PORT);
});

export default app;
