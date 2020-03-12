//here we require jsonwebtoken for authorization.......
const jwt=require('jsonwebtoken')
//and require joi for validation.....
const joi=require('joi')
//and require bcryptjs for password hashing.......
const Bcrypt=require('bcryptjs')

const user=require('../Model/userSchema')

const userSignup=function(req,res){
    let obj=req.body;

    obj.password=Bcrypt.hashSync(obj.password,2)

                //here we create a document of model userSignup.........
                let signupData=new user(obj)
                signupData.save(function(err,result){
                    if(err)
                    {
                        //console.log(err)
                        response={"erroe":true,"message":err};
                    }
                    else
                    {
                        response={"error":false,"message":result}
            
                    }
                     res.json(response)
                })

}

const userLogin=function(req,res){
    let mylogindata=req.body
    user.findOne({phoneNumber:mylogindata.phoneNumber},{},{lean:true},function(err, user) {
        if (err){
            res.json({"error":true,"message":"an error occured"})
        } 
        else if(user)
        {
            console.log(Bcrypt.compareSync(mylogindata.password,user.password))

          //here we compare the my hash password and plain text password ........
            if(Bcrypt.compareSync(mylogindata.password,user.password))//if password is match then compareSync function return true
            { 
                  
                delete user.password
               // res.json({"message":"login successfull","data":user})

                //here we create token for this specific user
                jwt.sign({_id:user._id,'scope':'admin'},'paytmProjectSecret',{expiresIn:'30 days'},function(err,token){
                    if(err)
                    {
                        res.send('an error occured in creating token..')
                    }
                    else{
                        res.json({"message":"login successfull","token":token})
                    }
            
                })

            } 
            else
            {
                res.json({"error":false,"message":"password is not match"})
            } 


        }   
        else
        {
            res.json({"error":false,"message":"phoneNumber not exist"})
        }      
    })

}
//here we require movieBookingTicket model

const movieBookingTicket=require('../Model/movie/movieTicketSchema')

const movieTicketBooking=function(req,res){
    let obj=req.body;

    const ticketBooking=new movieBookingTicket(obj)

    ticketBooking.save(function(err,result){
        if(err)
        {
            res.json({"error":true,"message":err})
        }
        else if(result)
        {
            res.json({"message":"ticket is booked","data":result})
        }
    })


}

const viewBookingStatus=function(req,res){

}

module.exports={
    userSignup:userSignup,
    userLogin:userLogin,
    movieTicketBooking:movieTicketBooking,
    viewBookingStatus:viewBookingStatus
}