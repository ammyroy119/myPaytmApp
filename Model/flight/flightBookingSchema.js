const mongoose=require('mongoose')
const Schema=mongoose.Schema

const flightBookingSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true,
        index:true

    },
    flightId:{
        type:Schema.Types.ObjectId,
        ref:'flight',
        required:true
    },
   traveller:[
       {type:String,
        required:true

    }
     ],
    class:{
        type:String,
        enum:['economy','premiumEconomy','business'],
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
    taxesAndCharges:{
        type:Number,
        required:true
    },
    totalFare:{
        type:String,
        required:true
    },
    bookingStatus:{
        type:String,
        required:true
    }
},{timestamps:true})

const flightBooking=mongoose.model('flightBooking',flightBookingSchema)
module.exports=flightBooking