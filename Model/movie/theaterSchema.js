const mongoose=require('mongoose')
const Schema=mongoose.Schema

const theaterSchema=new Schema({
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city',
        required:true

    },
    movieId:{
        type:Schema.Types.ObjectId,
        ref:'movie',
        required:true

    },
    theaterName:{
        type:String,
        required:true

    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }


    },
    day:{type:String,required:true},
    showTime:[{type:String,required:true}]


},{timestamps:true})

const theater=mongoose.model('theater',theaterSchema)
module.exports=theater