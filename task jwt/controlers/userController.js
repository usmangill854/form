const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.getAllUser=async(req,res) => {
    try {
        const allUser = await User.find()

    res.status(200).json({
        status:'succcess',
        users:allUser
    })
    } catch (error) {
        console.log(error)
    }
}
exports.createUser = async(req,res) => {
    try {
         
        const createUser = await User.create(req.body)

        res.status(200).json({
            status:'created User Successfully',
            users:createUser
        })
    } catch (error) {
        console.log(error)
    }
}
exports.varifyToken = (req,res,nect) =>{
  const bearerHeader = req.headers['authorization']

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearerHeader[1]
    req.token = bearerToken
    next( )
  }else{
      res.sendStatus(403)
  }
}
exports.userLogin = async  (req,res) => {


    const user =await User.findOne({ email:req.body.email,password:req.body.password}) 
    if(!user){
        return res.send('email not gud')
    }
    jwt.sign({user},'secretKey',(err,token) => {
        res.json({
            token
        })
    })



// exports.deleteUser = async(req,res) => {
//     try {
//         const createUser = await User.create(req.body)
//         res.status(200).json({
//             status:'created User Successfully',
//             users:createUser
//         })
//     } catch (error) {
//         console.log(error)
//     }
}