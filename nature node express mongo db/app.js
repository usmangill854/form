const express = require( 'express' )
const morgan = require('morgan')
const tourRouter =require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const app = express()

//1 middlewares
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))

}
app.use(express.json())

app.use((req,res,next) =>{
    console.log('hello middleware')
    next();
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString()
    next()
})


//2 Route Handlers


// app.get('/api/v1/tours',getAlltours)

// app.get('/api/v1/tours/:id',getTour)


// app.post('/api/v1/tours',createTour)

// app.patch('/api/v1/tours/:id',updateTour)

// app.delete('/api/v1/tours/:id',deleteTour)

//3 Routes


app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users', userRouter) 
//4 start Server






module.exports = app  













// const fs = require('fs')
// const superagent = require('superagent')

// const app= express()
// fs.readFile(`${__dirname}/dog.txt`,(err,data) =>{
//     console.log(`Bread ${data}`)
//     superagent
//         .get(`https://dog.ceo/api/breed/hound/images/random`)
//         .end((err,res) => {
//             if(err) return console.log(err.message)
//             console.log(res.body.message)

//         fs.writeFile('dog-img.txt',res.body.message,err=>{
//             if(err) return console.log(err.message)
//             console.log('Random image save to file')
//         })
//         })
// })



// app.get('/',(req,res) =>{
//     res.status(200).json('this is overview')
// })
// app.get('/products',(req,res) => {
//     res.send('this is product page')
// })
// app.listen(5000,()=>{
//     console.log('server is running fine')
// })