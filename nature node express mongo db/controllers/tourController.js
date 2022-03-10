const Tour = require('../models/tourModel')
// const tour =JSON.parse( fs.readFileSync(`${__dirname}/../dev-data/data/tours-sample.json`))


// exports.checkID = (req,res,next,val) => {
//     console.log(`tour id is ${val}`)

//     if(req.params.id*1 > tour.length){
//         return res.status(404).json({
//             'status':'fail',
//             'message':'invalid id'
//         })
//     }
//     next()
// }
// exports.checkBody=(req,res,next)=>{
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status:'fail',
//             message:'missing name or price'
//         })
//     }
//     next()
// }

exports.getAlltours =async (req,res) =>{
    // console.log(req.requestTime)
    try {

        const queryObj = {...req.query}
        const excludedFields = ['page','sort','limit','fields']
        excludedFields.forEach(el => delete queryObj[el])
        console.log(req.query)
//  filtering
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\bgte|gt|lte|lt\b/g,match =>`$${match}`)
        // console.log(JSON.parse(queryStr))


        let query = Tour.find(JSON.parse(queryStr))
// sorting
        console.log(req.query.sort)
        if(req.query.sort){
            
            const sortBy = req.query.sort.split(',').join(' ')
            query = query.sort(sortBy)
            console.log(sortBy)

        }else{
            query = query.sort('-createdAt')
        }
// field limmiting

        if(req.query.fields){ 
        const fields = req.query.fields.split(',').join(' ')
        query = query.select(fields)
        }else{
            query = query.select('-__v')
        }
// pagination
        const page = req.query.page*1 || 1
        const limit = req.query.limit ||4
        const skip = (page-1)*limit
        query = query.skip(skip).limit(limit)
        
        if(req.query.page){
            const numTours = await Tour.countDocuments()
            if(skip >= numTours) throw new Error('this page doesnot exist')
        }

        const tours = await query


    res.status(200).json( {
        status:'success',
        // requestedAt:req.requestTime,
        result:tours.length,
        data:{
            tours
        } 
          })
    } catch (error) {
        res.status(404).json({
            msg:'fail'
        })
    }
}
exports.getTour =async (req,res) =>{
    try {
        const tour = await Tour.findById(req.params.id)
        res.status(200).json({
            status:'success,',
            data:{
                tour
            }
        })
    } catch (error) {
        res.status(404)
    }
    const id = req.params.id*1
    // const tour1 = tour.find(el => el.id === id)

    

    

    // res.status(200).json( {
    //     status:'success',
    //     // result:tour.length,
    //     data:{
    //         tour1
    //     } 
    //       })
}
exports.createTour =async (req,res) => {
   try {
    const newTour = await Tour.create(req.body)

    res.status(201).json({
        status:'success',
        data:{ 
            tour:newTour
        }
     
    }
    ) 
   } catch (error) {
      res.status(400).json({
          status: 'fail',
          msg: error
      }) 
   }
}
    // console.log(req.body)
    //  const newId = tour[tour.length-1].id+1
    //  const newTour = Object.assign({id:newId},req.body)

    //  tour.push(newTour)
    //  fs.writeFile(`${__dirname}/dev-data/data/tours-sample.json`,JSON.stringify(tour),err => {
    // res.status(201).json({
    //     status:'success',
    //     data:{
    //         tour:newTour
    //     }
    // })
    //  })
    // // res.send('done')

exports.updateTour =async (req,res) =>{
    //  res.send('sds')

   try {
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    }) 
res.status(200).json({
    status:'success',
    data:{ 
        tour:tour
    }
})  
   } catch (error) {
    res.status(400).json({
        status: 'fail',
        msg: 'invalid data'
    })
   } 

}
exports.deleteTour = async(req,res) =>{
    //  res.send('sds')
    try {
    const tour = await Tour.findByIdAndRemove(req.params.id)
    res.status(204).json({
    status:'success',
    message: 'Tour Deleted'
})
    } catch (error) {
        
    res.status(400).json({
        status: 'fail',
        msg: 'something went wrong not deleted'
    })
    }

}
//  exports = {updateTour,deleteTour,createTour,getAlltours,getTour}
