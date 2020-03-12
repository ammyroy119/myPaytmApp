//here we require jsonwebtoken for authorization.......
const jwt=require('jsonwebtoken')
//and require joi for validation.....
const joi=require('joi')
//and require bcryptjs for password hashing.......
const Bcrypt=require('bcryptjs')
//here we require admin model.
const admin=require('../Model/adminSchema')

const adminSignup=function(req,res){
    let obj=req.body;
    obj.password=Bcrypt.hashSync(obj.password,2)

                //here we create a document of model userSignup.........
                let signupData=new admin(obj)
                signupData.save(obj,function(err,result){
                    if(err)
                    {
                        //console.log(err)
                        response={"erroe":true,"message":'an error occured'};
                    }
                    else
                    {
                        response={"error":false,"message":result}
            
                    }
                     res.json(response)
                })

}

const adminLogin=function(req,res){
    let mylogindata=req.body
    admin.findOne({phoneNumber:mylogindata.phoneNumber},{},{lean:true},function(err, user) {
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


const addCityMovies=function(req,res){
    console.log('hello addcitymovies....')

}

const addTheater=function(req,res){
    console.log('hello addTheater....')
}

const addTheaterSeat=function(req,res){
    console.log('addTheaterSeat....')
}

//here we require the movie model
const movie=require('../Model/movie/movieSchema')
const addMovie=function(req,res){
    let obj=req.body;

    let movieData=new movie(obj)

    movieData.save(function(err,result){
        if(err)
        {
            res.json({"error":true,"message":"an error occured"})
        }
        else if(result)
        {
            res.json({"error":false,"message":result})
        }
    })





}

module.exports={
    adminSignup:adminSignup,
    adminLogin:adminLogin,
    addMovie:addMovie,
    addCityMovies:addCityMovies
}