var express = require('express')
var router = express.Router()
const credential = {
    email:'admin@gmail.com',
    password:'admin123'
}

router.post('/login',(req,res) => {
    if(req.body.email==credential.email && req.body.password==credential.password){
        res.redirect('/dashboard')
    }
    else {
        res.end('invalid Username')
    }
})

module.exports = router