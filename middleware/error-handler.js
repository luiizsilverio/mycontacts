const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode >= 400 ? res.statusCode : 500;

  console.log(err.stack);

  res.status(statusCode).json({ message: err.message });
}

export default errorHandler;
