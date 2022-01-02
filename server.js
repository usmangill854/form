const express = require('express')
const path = require('path')
const app = express() 
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

app.use(express.urlencoded({
}))

app.get('/',(req,res)=>{
    res.render('index',{title:'Form Handling'})
})
app.post('/form_submit',(req,res)=>{
    const username=req.body.username
    const email = req.body.email
    res.send( `your username is ${username}
               and your email is ${email}`)
})

app.listen(5000 , () =>{
    console.log('server is listening on port 5000')
}) 