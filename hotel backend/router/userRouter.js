const express = require ('express')
const router = express.Router()

const {createUser,loginUser} = require ('../controller/userCon')
 
router.post('/createUser',createUser)
router.post('/login',loginUser)

module.exports = router