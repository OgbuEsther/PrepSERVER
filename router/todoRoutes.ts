import { Router } from "express";
import { findAll, findOne, newOne } from "../controller/todoControls";

const toDO = Router()


toDO.get("/" , findAll)
toDO.get("/:todoId" , findOne)                                
toDO.post("/new" , newOne)

export default toDO