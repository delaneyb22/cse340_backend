const triggerError = (req, res, next) => {
    throw new Error('An intentional error occurred');
  };
  
  exports.triggerError = triggerError;