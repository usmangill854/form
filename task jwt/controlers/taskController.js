const Task = require('../models/taskModel')

exports.getAllTask = async(req,res) => {
    const allTask = await Task.find()

    res.status(200).json({
        status: 'success',
        AllTask :allTask 
    })
}
exports.postTask =async ,(req,res) => {
    
    const newTask=await Task.create(req.body)
    res.status(200).json({
        status: 'success',
        message: newTask
    })
    
}
exports.updateTask =async (req,res) => {

    // const id =await Task.findById(req.params.id*1)
    // if(!id){
    //     res.status(500).send('Invalid ID')
    // }
    // console.log(typeof(req.params.id))

    try {
        const update =await Task.findByIdAndUpdate(req.params.id,{
            task: req.body.task
        },{
            new:true
        }
        )
    
        if(!update){
            res.status(400).send('invalid ID')
        }
        else{
        res.status(200).json({
            status: 'success',
            message: 'update successfull',
            task:update
        })
    }
    } catch (error) {
     res.send('ID error')   
    }
}
exports.deleteTask =async (req,res) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'success',
        message:'deleted successfully'
    })
}