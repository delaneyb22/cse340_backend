// routes/reviewRoute.js

const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.post('/reviews', ReviewController.addReview);
router.get('/cars/:carId/reviews', ReviewController.getReviewsByCarId);

module.exports = router;
