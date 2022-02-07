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

exports.userLogin = async ,varifyToken, (req,res) => {


    const user =await User.findOne({ email:req.body.email,password:req.body.password}) 
    if(!user){
        return res.send('email not gud')
    }
    jwt.sign({user},'secretKey',(err,token) => {
        res.json({
            token
        })
    })
const varifyToken = (req,res,nect) =>{

}


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