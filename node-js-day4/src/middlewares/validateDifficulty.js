module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['easy', 'medium', 'hard'];
  if (!classifications.includes(difficulty)) {
    return res.status(400).json({ message: '"difficulty" is required' });
  }
  next();
};