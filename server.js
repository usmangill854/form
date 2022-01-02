const express = require('express')
const path = require('path')
const app = express() 
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index',{title:'Form Handling'})
})


app.listen(5000 , () =>{
    console.log('server is listening on port 5000')
}) 