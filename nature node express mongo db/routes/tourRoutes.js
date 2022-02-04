const {getAlltours,createTour,getTour,updateTour,deleteTour}=require('../controllers/tourController')
const tourController = require('../controllers/tourController')
const express = require('express')




const router = express.Router() 

// router.param('id',tourController.checkID)

router.route('/').get(getAlltours).post(createTour)

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

module.exports = router