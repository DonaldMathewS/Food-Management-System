const express = require("express")
const router=express.Router()
const {createHotel,viewHotel} = require('../controller/hotelCon')


router.post('/createHotel',createHotel)
router.get('/getHotel',viewHotel)




module.exports=router   