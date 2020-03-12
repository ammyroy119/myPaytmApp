const mongoose=require('mongoose')
const Schema=mongoose.Schema

const flightSchema=new Schema({
    flightName:{
        type:String,
        required:true
    },
    flightNumber:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    flightdate:[{
        type:Date,
        required:true
    }
    ],
    flightTime:[{
        type:Date,
        required:true
    }]
},{timestamps:true})

flightSchema.index({flightName:1,flightNumber:1},{unique:true})

const flight=mongoose.model('flight',flightSchema)
module.exports=flight