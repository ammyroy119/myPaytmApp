const mongoose=require('mongoose')
const Schema=mongoose.Schema

const adminSchema=new Schema({
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        index:true,
        validate: {
            validator: function(v) {
                var reg= /^\d{10}$/;
                return (v == null || v.trim().length < 1) || reg.test(v)
            },
            message: 'Provided phoneNumber is invalid.'
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:12
    },
    status:{
        type:String,
        enum:['active','inactive','delete'],
        required:true
    }
},{timestamps:true})

const admin=mongoose.model('admin',adminSchema)
module.exports=admin