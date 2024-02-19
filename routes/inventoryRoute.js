const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");

console.log(invController);
// Define routes
router.get("/type/:classificationId", invController.buildByClassificationId);

router.get('/:id', async (req, res) => {
    try {
      const vehicle = await getVehicleById(req.params.id);
      if (!vehicle) {
        return res.status(404).send('Vehicle not found');
      }
      const vehicleHtml = createVehicleHtml(vehicle);
      res.render('inventory/vehicle', { vehicleHtml });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
});

// Define error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
};

// Use error handler middleware
router.use(errorHandler);

// Export the router instance
module.exports = router;