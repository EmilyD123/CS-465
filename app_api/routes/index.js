const express = require('express'); //Express app
const router = express.Router(); //Router logic

//import controllers to be routed
const tripsController = require('../controllers/trips');

//Define router for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); //GET method routes tripList

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;