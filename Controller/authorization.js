const jwt=require('jsonwebtoken')

const verifyToken=function(req,res,next){
    console.log('hello verifyToken....')
    let key;
    let flag=0;
    for(key in req.headers)
    {
        if(key=='authorization')
        {
            flag=1;
            break;
        }
    }
    if(flag==1)
    {
        const token=req.headers.authorization
        console.log(token)
        jwt.verify(token,'paytmProjectSecret',function(err,authData){
            if(err)
            {
                res.json({"errorType":"unathorized","status":400,"errorMessage":"invalidToken"})

            }
            else if(authData)
            {
                req.user=authData
                next()
            }
        })

    }
    else{
        res.json({"errorType":"access type","status":400,"errorMessage":"access denied"})
    }

}
module.exports=verifyToken