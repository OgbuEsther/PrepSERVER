import { Request , Response } from "express";

import todoModel from "../Model/todoModel";


export const findAll = async(req:Request , res:Response) =>{
    try {
        const all = await todoModel.find()

        return res.status(200).json({
            message : "gotten all",
            data : all
        })
    } catch (error) {
     console.log(error)   
    }
}
export const findOne = async(req:Request , res:Response) =>{
    try {
        const one = await todoModel.findById(req.params.todoId)

        return res.status(200).json({
            message : "gotten one",
            data : one
        })
    } catch (error) {
     console.log(error)   
    }
}
export const newOne = async(req:Request , res:Response) =>{
    try {

        const {title} = req.body
        const all = await todoModel.create({
            title
        })

        return res.status(200).json({
            message : "create new one",
            data : all
        })
    } catch (error) {
     console.log(error)   
    }
}