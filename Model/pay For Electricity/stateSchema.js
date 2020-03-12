const mongoose=require('mongoose')
const Schema=mongoose.Schema

const stateSchema=new Schema({
    electricityId:{
        type:Schema.Types.ObjectId,
        ref:'electricity',
        required:true
    },
    stateName:{
        type:String,
        required:true
    }

},{timestamps:true})

const state=mongoose.model('state',stateSchema)
module.exports=state