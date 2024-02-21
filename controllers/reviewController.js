// controllers/ReviewController.js

const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const { carId, userId, reviewText, rating } = req.body;
    try {
        await Review.addReview(carId, userId, reviewText, rating);
        res.redirect(`/cars/${carId}`);
    } catch (error) {
        console.error('Error adding review:', error);
        req.flash('error', 'Failed to add review');
        res.redirect(`/cars/${carId}`);
    }
};

exports.getReviewsByCarId = async (req, res) => {
    const { carId } = req.params;
    try {
        const reviews = await Review.getReviewsByCarId(carId);
        res.render('carReviews', { reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        req.flash('error', 'Failed to fetch reviews');
        res.redirect(`/cars/${carId}`);
    }
};
