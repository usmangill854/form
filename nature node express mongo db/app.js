const fs = require('fs')
const express = require("express");

const app = express()
app.use(express.json())

app.use((req,res,next) =>{
    console.log('hello middleware')
    next();
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString()
    next()
})

const tour =JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-sample.json`))

const getAlltours = (req,res) =>{
    console.log(req.requestTime)

    res.status(200).json( {
        status:'success',
        requestedAt:req.requestTime,
        result:tour.length,
        data:{
            tour
        } 
          })
}
const getTour = (req,res) =>{
    
    const id = req.params.id*1
    const tour1 = tour.find(el => el.id === id)

    if(!tour1){
        return res.status(404).json({
            'status':'fail',
            'message':'invalid id'
        })
    }

    

    res.status(200).json( {
        status:'success',
        // result:tour.length,
        data:{
            tour1
        } 
          })
}
const createTour =(req,res) => {
    // console.log(req.body)
     const newId = tour[tour.length-1].id+1
     const newTour = Object.assign({id:newId},req.body)

     tour.push(newTour)
     fs.writeFile(`${__dirname}/dev-data/data/tours-sample.json`,JSON.stringify(tour),err => {
    res.status(201).json({
        status:'success',
        data:{
            tour:newTour
        }
    })
     })
    // res.send('done')
}
const updateTour = (req,res) =>{
    //  res.send('sds')

if(req.params.id*1 > tour.length){
    return res.status(404).json({
        'status':'fail',
        'message':'invalid id'
    })
}
res.status(200).json({
    status:'success',
    data:{
        tour:'on it'
    }
})

}
const deleteTour = (req,res) =>{
    //  res.send('sds')

if(req.params.id*1 > tour.length){
    return res.status(404).json({
        'status':'fail',
        'message':'invalid id'
    })
}
res.status(204).json({
    status:'success',
    data:{
        tour :null
    }
})

}
// app.get('/api/v1/tours',getAlltours)

// app.get('/api/v1/tours/:id',getTour)


// app.post('/api/v1/tours',createTour)

// app.patch('/api/v1/tours/:id',updateTour)

// app.delete('/api/v1/tours/:id',deleteTour)



app.route('/api/v1/tours').get(getAlltours).post(createTour)
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)



const port = 3000
app.listen(port,()=>{
    console.log('app is running on port 3000')
})




















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