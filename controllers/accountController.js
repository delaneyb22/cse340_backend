const Account = require('../models/accountModel');

// Function to deliver the update account view
function getUpdateAccountView(req, res) {
    // Logic to render the update account view
    res.render('account/update');
}

// Function to handle account information update
async function updateAccount(req, res) {
    try {
        const accountId = req.user.id; // Assuming user ID is stored in req.user.id after authentication
        
        // Update account information based on form data
        await Account.findByIdAndUpdate(accountId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        });

        // Redirect to account management view with success message
        res.redirect('/account/management');
    } catch (error) {
        console.error('Error updating account information:', error);
        // Handle error appropriately (e.g., render error page)
        res.status(500).send('Internal Server Error');
    }
}

// Function to handle password change request
async function changePassword(req, res) {
    try {
        const accountId = req.user.id; // Assuming user ID is stored in req.user.id after authentication
        
        // Update password based on form data
        await Account.findByIdAndUpdate(accountId, { password: req.body.newPassword });

        // Redirect to account management view with success message
        res.redirect('/account/management');
    } catch (error) {
        console.error('Error changing password:', error);
        // Handle error appropriately (e.g., render error page)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getUpdateAccountView,
    updateAccount,
    changePassword
};
