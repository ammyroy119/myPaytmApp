const mongoose=require('mongoose')
const Schema=mongoose.Schema

const trainTicketBookingSchema=new Schema({
    IrctcUserId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true

    },
    trainId:{
        type:Schema.Types.ObjectId,
        ref:'train',
        required:true
    },
   passenger:[
       {type:String,
    required:true}
     ],
    class:{
        type:String,
        enum:['sleeper','3A','2A','1A','CC','2S','General','EA','EC','FC','3E'],
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
    bookingDate:{
        type:Date,
        default:Date.now()

    },
    PNR:{
        type:String,
        index:true,
        unique:true,
        required:true
    },
    taxesAndCharges:{
        type:Number,
        required:true
    },
    totalFare:{
        type:Number,
        required:true
    },
    bookingStatus:{
        type:String,
        required:true,
        enum:['confirm','Rac','cancel','waiting']
    },
    seat:[{type:String,required:true}]
},{timestamps:true})

const trainTicketBooking=mongoose.model('trainTicketBooking',trainTicketBookingSchema)
module.exports=trainTicketBooking