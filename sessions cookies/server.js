const express = require('express')
const path = require('path')
const app = express() 
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const cookies= require('cookie-parser')

app.use(cookies())
const user={
    name:'john',
    age:24
}
app.get('/',(req,res) => {
    res.send('cookies toturial')
})
 app.get('/setuser',(req,res) => {
     res.cookie('userData',user)
     res.send('userData added to cookies')
 })

 app.get('/getuser',(req,res) => {
     res.send(req.cookies)
 })
 app.get('/logout',(req,res) => {
     res.clearCookie('userData')
     res.send('user logout successfully')
 })


// const session = require('express-session')

// app.use(session({
//     secret:'your secret key',
//     resave:true,
//     saveUninitialized:true

// }))
// app.get('/',(req,res) => {
//     req.session.name = 'john'
//     return res.send('session set')
// })

// app.get('/session',(req,res) =>{
//     var name = req.session.name
//     return res.send(name)
// })

// app.get('/destroy',(req,res)=>{
//     req.session.destroy((err)=>{
//         console.log('session destroyed')
//     })
//     res.end()
// })






// app.set('views',path.join(__dirname,'views'))
// app.set('view engine','pug')

// app.use(express.urlencoded({
// }))

// app.get('/',(req,res)=>{
//     res.render('index',{title:'Form Handling'})
// })
// app.post('/form_submit',(req,res)=>{
//     const username=req.body.username
//     const email = req.body.email
//     res.send( `your username is ${username}
//                and your email is ${email}`)
// })

app.listen(PORT , () =>{
    console.log('server is listening on port 5000')
}) 