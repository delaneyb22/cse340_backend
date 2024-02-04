const pool = require("../database")

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

module.exports = {
  getAllVehicles,
  getVehicleById
};