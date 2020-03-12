const mongoose=require('mongoose')
const Schema=mongoose.Schema

const movieTicketSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true

    },
    movieId:{
        type:Schema.Types.ObjectId,
        ref:'movie',
        required:true

    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city',
        required:true
    },
    theaterId:{
        type:Schema.Types.ObjectId,
        ref:'theater',
        required:true

    },
    day:{
        type:Date,
        default:Date.now(),
        required:true

    },
    time:{
        type:String,
        required:true
    },
    seat:[{
        type:String,
        required:true
    }],
    totalAmount:{
        type:String,
        required:true
    },
    bookingStatus:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const movieTicket=mongoose.model('movieTicket',movieTicketSchema)
module.exports=movieTicket