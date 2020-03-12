const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bankSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    registeredPhoneNumber:{
        type:String,
        required:true
    }
},{timestamps:true})

const bank=mongoose.model('bank',bankSchema)
module.exports=bank