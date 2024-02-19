router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const { validateAccountUpdate, validatePasswordChange } = require('../middleware/validationMiddleware');

// Route to deliver the update account view
router.get('/update', accountController.getUpdateAccountView);

// Route to handle account information update
router.post('/update', validateAccountUpdate, accountController.updateAccount);

// Route to handle password change request
router.post('/change-password', validatePasswordChange, accountController.changePassword);

module.exports = router;
