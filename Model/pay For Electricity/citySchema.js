const mongoose=require('mongoose')
const Schema=mongoose.Schema

const citySchema=new Schema({
    electricityId:{
        type:Schema.Types.ObjectId,
        ref:'electricity',
        required:true
    },
    cityName:{
        type:String,
        required:true
    }

},{timestamps:true})

const city=mongoose.model('city',citySchema)
module.exports=city