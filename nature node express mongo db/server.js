const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path : './config.env'})


const app = require('./app')
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD)
mongoose.connect(DB,{

}).catch(() =>console.log('connection Successfull'))



const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('app is running on port 3000')
})
