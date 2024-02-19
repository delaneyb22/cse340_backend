const invModel = require("../models/inventory-model")
const utilities = require("../views")
const Inventory = require('../models/inventory-model');
const { getVehicleById } = require("../models/inventory-model");
const { createVehicleHtml } = require("../views/index");


const invController = {};

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invController.buildByClassificationId = async function (req, res, next) {
  try{
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })}
  catch{console.error(error);
    res.status(500).send('Internal Server Error');}
};

/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */
async function getInventoryByClassificationId(classification_id) {
    try {
      const data = await pool.query(
        `SELECT * FROM public.inventory AS i 
        JOIN public.classification AS c 
        ON i.classification_id = c.classification_id 
        WHERE i.classification_id = $1`,
        [classification_id]
      )
      return data.rows
    } catch (error) {
      console.error("getclassificationsbyid error " + error)
    }
  }
  






invController.buildByClassificationId = async (req, res) => {
  async function getInventoryByClassificationId(classification_id) {
    try {
      const data = await pool.query(
        `SELECT * FROM public.inventory AS i 
        JOIN public.classification AS c 
        ON i.classification_id = c.classification_id 
        WHERE i.classification_id = $1`,
        [classification_id]
      )
      return data.rows
    } catch (error) {
      console.error("getclassificationsbyid error " + error)
    }
  }
};

exports.buildVehicleDetailView = async (req, res) => {
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
};



const getClassifications = async () => {
  const classifications = await Inventory.find().distinct('classification');
  return classifications;
};

module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getVehicleById,
  createVehicleHtml,
  buildByClassificationId,//error
  buildVehicleDetailView,
  invController
};
