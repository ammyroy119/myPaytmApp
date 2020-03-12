const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
router.use(bodyParser.json())
//here we require middleware verfyToken....
const verfyToken=require('../Controller/authorization')
//here we require userController........
const userController=require('../Controller/userController')
//here we make route for user signup.... 
router.post('/userSignup',userController.userSignup)
//here we make route for user login....
router.post('/userLogin',userController.userLogin)
//here we make route for bookMovie....
router.post('/movieTicketBooking',verfyToken,userController.movieTicketBooking)

router.post('viewBookingStatus',verfyToken,userController.viewBookingStatus)

module.exports=router