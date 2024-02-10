const pool = require("../database")
const Vehicle = require('/Users/delaneybaker/cse340_backend/models/vehicle-model');

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

module.exports = {getClassifications}


const getVehicleById = async (id) => {
  async function getClassifications(){
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
  }
  // Add a filter to only return the vehicle with the specified id
  const vehicle = vehicles.find(vehicle => vehicle.id === id);
  return vehicle;
};
const getAllVehicles = async () => {
  const vehicles = await Vehicle.find();
  return vehicles;
};

module.exports = {
  getAllVehicles,
  getVehicleById
};



