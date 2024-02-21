// models/Review.js

const db = require('../config/db');

class Review {
    static async addReview(carId, userId, reviewText, rating) {
        const query = 'INSERT INTO car_reviews (car_id, user_id, review_text, rating) VALUES (?, ?, ?, ?)';
        const values = [carId, userId, reviewText, rating];
        try {
            await db.execute(query, values);
            return true;
        } catch (error) {
            console.error('Error adding review:', error);
            return false;
        }
    }

    static async getReviewsByCarId(carId) {
        const query = 'SELECT * FROM car_reviews WHERE car_id = ?';
        try {
            const [rows] = await db.execute(query, [carId]);
            return rows;
        } catch (error) {
            console.error('Error fetching reviews:', error);
            return [];
        }
    }
}

module.exports = Review;
