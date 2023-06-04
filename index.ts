console.log("--------------------------------");
import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "./db";

const port = 3333

const app: Application = express();
appConfig(app);
dbConfig();

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});


console.log("-------------------------------- : ");
console.log("-------------------------------- : ");