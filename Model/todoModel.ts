import mongoose from "mongoose";

interface iData {
    title : string
}

interface data extends iData , mongoose.Document{}


const ToDoSchema = new mongoose.Schema({
    title : {
        type : String
    }
})

const todoModel = mongoose.model<data>("todocoll" , ToDoSchema)

export default todoModel