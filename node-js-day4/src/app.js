const express = require('express');
const auth = require('./middlewares/auth');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateRating = require('./middlewares/validateRating');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validatePrice = require('./middlewares/validatePrice');
const validateName = require('./middlewares/validateName');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

app.post('/activities',
auth,
validateDifficulty,
validateRating,
validateCreatedAt,
validateDescription,
validateName,
validatePrice,
(_req, res) => {
  res.status(201).json({ message: 'Activity created successfully!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const tokenGenerated = generateToken();
  return res.status(200).json({ token: tokenGenerated });
});

module.exports = app;