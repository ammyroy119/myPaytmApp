const mongoose=require('mongoose')
const Schema=mongoose.Schema

const simSchema=new Schema({
    simName:{
        type:String,
        required:true
    },
    simLogo:{
        type:String,
        required:true
    }
},{timestamps:true})

simSchema.index({simName:1,simLogo:1},{unique:true})

const sim=mongoose.model('sim',simSchema)
module.exports=sim