const mongoose=require('mongoose')
const Schema=mongoose.Schema

const moneyTransfer=new Schema({
    userBankId:{
        type:Schema.Types.ObjectId,
        ref:'bank'
    },
    toMobileNumber:{
        type:String,
        validate: {
            validator: function(v) {
                var reg= /^\d{10}$/;
                return (v == null || v.trim().length < 1) || reg.test(v)
            },
            message: 'Provided phoneNumber is invalid.'
        }
    },
    toBankAccountOrUpiId:{
        type:String,
        minlength:6,
        maxlength:20
    },
    IfscCode:{
        type:String
    },
    AccountHolderName:{
        type:String
    },
    amount:{
        type:number,
        required:true

    },
    transferStatus:{
        type:String,
        required:true
    }
},{timestamps:true})