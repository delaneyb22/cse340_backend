// Example functions in accountModel.js
exports.getAccountById = async (accountId) => {
    try {
        // Use Mongoose to find the account record by ID
        const account = await Account.findById(accountId);

        // If the account is not found, return null
        if (!account) {
            return null;
        }

        // If the account is found, return the account object
        return account;
    } catch (error) {
        // If an error occurs, log the error and return null
        console.error('Error retrieving account information:', error);
        return null;
    }
};

exports.updateAccountInfo = async (accountId, firstName, lastName, email) => {
    try {
        // Step 1: Retrieve the Account Record
        const account = await Account.findById(accountId);

        if (!account) {
            throw new Error('Account not found');
        }

        // Step 2: Update the Account Information
        account.firstName = firstName;
        account.lastName = lastName;
        account.email = email;

        // Step 3: Save Changes
        await account.save();

        return true; // Indicate success
    } catch (error) {
        console.error('Error updating account information:', error);
        return false; // Indicate failure
    }
};

exports.updatePassword = async (accountId, newPasswordHash) => {
    try {
        // Step 1: Retrieve the Account Record
        const account = await Account.findById(accountId);

        if (!account) {
            throw new Error('Account not found');
        }

        // Step 2: Update the Password Field
        account.password = newPasswordHash; 

        // Step 3: Save Changes
        await account.save();

        return true; // Indicate success
    } catch (error) {
        console.error('Error updating password:', error);
        return false; // Indicate failure
    }
};
