const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;

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

  
  const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
  };

  const invRouter = require('./routes/invRouter');

const app = express();

app.use(errorHandler, { handleError: true });

app.use('/inventory', invRouter);