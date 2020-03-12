const mongoose=require('mongoose')
const Schema=mongoose.Schema

const planSchema=new Schema({
    simId:{
        type:Schema.Types.ObjectId,
        ref:'sim',
        required:true 
    },
    planDetail:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }

},{timestamps:true})

planSchema.index({planDetail:1,amount:1},{unique:true})

const plan=mongoose.model('plan',planSchema)
module.exports=plan