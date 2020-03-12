const mongoose=require('mongoose')
const Schema=mongoose.Schema

const classSchema=new Schema({
    flightId:{
        type:Schema.Types.ObjectId,
        ref:'flight',
        required:true
    },
    className:{
        type:String,
        required:true
    },
    fare:{
        type:Number,
        min:1000
    },
    seat:[{type:String,required:true}]
},{timestamps:true})


const flightClass=mongoose.model('flightClass',classSchema)
module.exports=flightClass