require('./dbConnection')
const express=require('express')
const app=express()
//here we require user router....
const route=require('./Router/userRouter')
//here we require admin router....
const route1=require('./Router/adminRouter')

app.use('/',route,route1)


app.listen('8000',function(err,res){
    if(err)
    {
        console.log('an error occured,server is not created...')
    }
    console.log('server on port 8000 is running.....')

})
//here we working on swagger.......
const swaggerUi=require('swagger-ui-express')
const swaggerDocument=require('./Model/swagger.json')

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))