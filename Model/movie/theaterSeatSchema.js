const mongoose=require('mongoose')
const Schema=mongoose.Schema

const theaterSeatSchema=new Schema({
    theaterId:{
        type:Schema.Types.ObjectId,
        ref:'theater',
        required:true

    },
    class:{
        type:String,
        enum:['Executive','Royal','Marvel','Club','Recliner','Prime','Classic'],
        required:true
    },
    fare:{
        type:String,
        required:true
    },
    seat:[{
        type:String,
        required:true
    }]
},{timestamps:true})

const theaterSeat=mongoose.model('theaterSeat',theaterSeatSchema)
module.exports=theaterSeat