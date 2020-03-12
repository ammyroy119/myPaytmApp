const mongoose=require('mongoose')
const Schema=mongoose.Schema

const mobileRechargeSchema=new Schema({
    rechargeType:{
        type:String,
        enum:['prepaid','postpaid'],
        required:true
    },
    mobileNumber:{
        type:String,
        validate: {
            validator: function(v) {
                var reg= /^\d{10}$/;
                return (v == null || v.trim().length < 1) || reg.test(v)
            },
            message: 'Provided phoneNumber is invalid.'
        },  
        index:true,
        
        required:true
    },
    planId:{
        type:Schema.Types.ObjectId,
        ref:'plan',
        required:true
        
    },
    rechargeStatus:{
        type:String,
        enum:['success','unsuccesss'],
        required:true
    }
},{timestamps:true})

const mobileRecharge=mongoose.model('mobileRecharge',mobileRechargeSchema)

module.exports=mobileRecharge