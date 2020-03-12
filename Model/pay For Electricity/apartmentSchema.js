const mongoose=require('mongoose')
const Schema=mongoose.Schema

const apartmentSchema=new Schema({
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city',
        required:true
    },
    apartmentName:{
        type:String,
        required:true
    }

},{timestamps:true})

const apartment=mongoose.model('apartment',apartmentSchema)
module.exports=apartment