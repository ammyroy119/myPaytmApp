const mongoose=require('mongoose')
const Schema=mongoose.Schema

const movieSchema=new Schema({
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
    movieName:{
        type:String,
        required:true
    },
    movieLanguage:{
        type:String,
        required:true

    },
    movieRating:{
        type:String,
        required:true

    },
    movieType:{
        type:String,
        required:true

    }
},{timestamps:true})

const movie=mongoose.model('movie',movieSchema)
module.exports=movie