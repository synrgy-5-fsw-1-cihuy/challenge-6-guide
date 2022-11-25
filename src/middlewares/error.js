const errorHandler = (error, req, res, next) => {
  console.error(error);
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  res.status(error.status).json({
    status: errorStatus,
    message: errorMessage,
    data: null,
  });
};

module.exports = errorHandler;
