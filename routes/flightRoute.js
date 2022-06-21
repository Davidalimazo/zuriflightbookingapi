const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)
router.get('/single_flight/:id', controller.singleFlight)
router.post('/book_flight', controller.bookFlight)
router.put('/update_flight/:id', controller.updateFlight)
router.delete('/delete_flight/:id', controller.deleteFlight)

module.exports = router;

