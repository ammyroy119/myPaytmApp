const mongoose=require('mongoose')
const Schema=mongoose.Schema

const electricitySchema=new Schema({
    billType:{
        type:String,
        enum:['electricity boards','apartments'],
        required:true
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:'state',
        required:true
    },
    boardId:{
        type:Schema.Types.ObjectId,
        ref:'board',
        required:true

    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city',
        required:true

    },
    apartmentId:{
        type:Schema.Types.ObjectId,
        ref:'apartment',
        required:true

    },
    accountNumber:{
        type:String,
        required:true

    },
    bill:{
        type:Number,
        required:true
    }

},{timestamps:true})

electricitySchema.index({stateId:1,cityId:1})

const electricity=mongoose.model('electricity',electricitySchema)
module.exports=electricity