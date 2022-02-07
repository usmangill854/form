const express = require('express')
const router = express.Router()
const {getAllTask,postTask,updateTask,deleteTask} = require('../controlers/taskController')
router.route('/').post(postTask).get(getAllTask)
router.route('/:id').patch(updateTask).delete(deleteTask)

// router.route.post('/',postTask)
// router.route.patch('/api/v1/task/:id', updateTask)
// router.route.delete('/api/v1/task/:id',deleteTask)

module.exports = router