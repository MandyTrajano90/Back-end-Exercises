// module.exports = (req, res, next) => {
//   const { description } = req.body;
//   if (!description) {
//     return res.status(400).json({ message: '"description" is required' });
//   }
//   if (!description.createdAt) {
//     return res.status(400).json({ message: '"createdAt" is required' });
//   }
//   if (!description.rating) {
//     return res.status(400).json({ message: '"rating" is required' });
//   }
//   if (!description.difficulty) {
//     return res.status(400).json({ message: '"difficulty" is required' });
//   }
//   next();
// };

// REFACTORING

const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};