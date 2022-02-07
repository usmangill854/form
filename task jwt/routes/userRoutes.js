const express = require('express')

const {getAllUser,createUser,userLogin} = require('../controlers/userController')

const router = express.Router()

router.route('/').get(getAllUser).post(createUser)
router.route('/login').post(userLogin)
module.exports= router   