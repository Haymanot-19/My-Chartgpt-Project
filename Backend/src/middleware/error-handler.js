export const errorHandler = (err, req, res, next) => {
  console.error('Error in request:', err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong. Try again later.',
  });
};