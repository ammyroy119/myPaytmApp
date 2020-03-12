var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task_manager',{ useNewUrlParser: true , useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{
    console.log('connected to databaseat at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    }
    
})