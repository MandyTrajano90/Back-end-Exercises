module.exports = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (price < 0 && typeof price !== 'number') {
    return res.status(400).json({ message: '"price" must be larger than 0' });
  }
  next();
};  