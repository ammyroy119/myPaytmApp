const mongoose=require('mongoose')
const Schema=mongoose.Schema

const trainSchema=new Schema({
    trainName:{
        type:String,
        required:true
    },
    trainNumber:{
        type:String,
        required:true
    },
    sourceStation:{
        type:String,
        required:true
    },
    destinationStation:{
        type:String,
        required:true
    },
    trainday:[{
        type:Date,
        required:true
    }
    ],
    trainTime:[{
        type:Date,
        required:true
    }]
},{timestamps:true})

trainSchema.index({trainName:1,trainNumber:1},{unique:true})

const train=mongoose.model('train',trainSchema)
module.exports=train