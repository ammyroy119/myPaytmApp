const mongoose=require('mongoose')
const Schema=mongoose.Schema

const citySchema=new Schema({
    cityName:{
        type:String,
        index:true,
        unique:true,
        required:true
    },
    cityLogo:{
        type:String
    }
},{timestamps:true})

const movieCity=mongoose.model('movieCity',citySchema)
module.exports=movieCity