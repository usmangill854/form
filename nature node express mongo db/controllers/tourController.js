const fs = require('fs')

const tour =JSON.parse( fs.readFileSync(`${__dirname}/../dev-data/data/tours-sample.json`))


exports.checkID = (req,res,next,val) => {
    console.log(`tour id is ${val}`)

    if(req.params.id*1 > tour.length){
        return res.status(404).json({
            'status':'fail',
            'message':'invalid id'
        })
    }
    next()
}
exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'missing name or price'
        })
    }
    next()
}

exports.getAlltours = (req,res) =>{
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
exports.getTour = (req,res) =>{
    
    const id = req.params.id*1
    const tour1 = tour.find(el => el.id === id)

    

    

    res.status(200).json( {
        status:'success',
        // result:tour.length,
        data:{
            tour1
        } 
          })
}
exports.createTour =(req,res) => {
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
exports.updateTour = (req,res) =>{
    //  res.send('sds')

    
res.status(200).json({
    status:'success',
    data:{
        tour:'on it'
    }
})

}
exports.deleteTour = (req,res) =>{
    //  res.send('sds')


res.status(204).json({
    status:'success',
    data:{
        tour :null
    }
})

}
//  exports = {updateTour,deleteTour,createTour,getAlltours,getTour}
