const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')

router.use(bodyParser.json())
//here we require adminController............
const adminController=require('../Controller/adminController')

//here we require middleware verfyToken ...........
const verfyToken=require('../Controller/authorization')


//here we make route for adminSignup...............
router.post('/adminSignup',adminController.adminSignup)
//here we make route for adminLogin................
router.post('/adminLogin',adminController.adminLogin)
//here we make route for addMovie..............
router.post('/addMovie',verfyToken,adminController.addMovie)


module.exports=router

