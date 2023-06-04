import express, { Application, Request, Response, NextFunction } from "express";
import toDO from "./router/todoRoutes";

//creating our application
const appConfig = (app: Application) => {
 
  //
  app.use(express.json())

  app.use("/app" , toDO)
 
};

export default appConfig;
