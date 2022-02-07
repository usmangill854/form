const express = require('express')
const mongoose = require('mongoose')
// dotenv.config({path:'./config.env'})
// const dotenv = require('dotenv')
const app = express()
const port =  process.env.PORT || 3000
const taskRouter = require('./routes/taskRoutes')
const userRouter = require('./routes/userRoutes')
app.use(express.json())



app.use('/api/v1/task',taskRouter)
app.use('/api/v1/user',userRouter)




const dbConnect = async () => {

     await mongoose.connect('mongodb+srv://gill:1234@cluster0.wuqqy.mongodb.net/TaskWork?retryWrites=true&w=majority')
        console.log('db is connected')
     
}
dbConnect();
app.listen(port,() => {
    console.log('app is rinng on port 3000')
})