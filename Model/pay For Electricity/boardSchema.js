const mongoose=require('mongoose')
const Schema=mongoose.Schema

const boardSchema=new Schema({
    stateId:{
        type:Schema.Types.ObjectId,
        ref:'state',
        required:true
    },
    boardName:{
        type:String,
        required:true
    }

},{timestamps:true})

const board=mongoose.model('board',boardSchema)
module.exports=board