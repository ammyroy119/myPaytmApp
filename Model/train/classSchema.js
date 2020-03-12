const mongoose=require('mongoose')
const Schema=mongoose.Schema

const classSchema=new Schema({
    trainId:{
        type:Schema.Types.ObjectId,
        ref:'train',
        required:true
    },
    className:{
        type:String,
        required:true
    },
    fare:{
        type:Number,
        min:10
    },
    seat:[{type:String,required:true}]
},{timestamps:true})


const class1=mongoose.model('class1',classSchema)
module.exports=class1