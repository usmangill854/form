const express = require('express')
const path = require('path')
const app=express()

const port = process.env.PORT || 3000

app.set('view engine','ejs')

//load static
app.use('/static',express.static(path.join(__dirname,'public')))
//home route
app.get('/',(req,res) =>{
    res.render('base',{title:'LOGIN SYSTEM'})
})


app.listen(port,()=>{
    console.log('server is running port 3000')
})