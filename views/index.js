const invModel = require("../models/inventory-model")
const Util = {}

/* ************************
 * Constructs the nav HTML unordered list
 ************************** */
Util.getNav = async function (req, res, next) {
  let data = await invModel.getClassifications()
  let list = "<ul>"
  list += '<li><a href="/" title="Home page">Home</a></li>'
  data.rows.forEach((row) => {
    list += "<li>"
    list +=
      '<a href="/inv/type/' +
      row.classification_id +
      '" title="See our inventory of ' +
      row.classification_name +
      ' vehicles">' +
      row.classification_name +
      "</a>"
    list += "</li>"
  })
  list += "</ul>"
  return list
}

module.exports = Util

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

exports.createVehicleHtml = (vehicle) => {
  const vehicleHtml = `
    <h1>${vehicle.make} ${vehicle.model}</h1>
    <%- messages() %>
    <img src="${vehicle.fullSizeImageUrl}" alt="${vehicle.make} ${vehicle.model}" />
    <p>Year: ${vehicle.year}</p>
    <p>Price: ${formatCurrency(vehicle.price)}</p>
    <p>Mileage: ${formatNumber(vehicle.mileage)}</p>
    <p>${vehicle.description}</p>
  `;
  return vehicleHtml;
};