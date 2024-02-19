// Define middleware function
const checkAccess = (req, res, next) => {
    // Extract JWT token from request headers or cookies
    const token = req.headers.authorization?.split(' ')[1]; // Assuming token is passed in Authorization header

    // Verify token and decode payload
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        const { accountType } = decoded; // Extract account type from decoded token payload

        // Check if account type is 'Employee' or 'Admin'
        if (accountType === 'Employee' || accountType === 'Admin') {
            // Allow access to next middleware or route handler
            next();
        } else {
            // Redirect to login view with appropriate message
            res.redirect('/login?error=Unauthorized');
        }
    } catch (error) {
        // Handle token verification errors
        res.redirect('/login?error=Unauthorized');
    }
};

// Apply middleware to relevant routes
app.use('/admin', checkAccess);
