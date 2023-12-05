module.exports = (req, res, next) => {
  const { rating } = req.body.description;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ message: '"rating" is required' });
  }
  next();
};