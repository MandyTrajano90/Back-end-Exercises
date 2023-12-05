const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();
app.use(express.json());

app.post('/activities',
validateDifficulty,
validateRating,
validateCreatedAt,
validateDescription,
validateName,
validatePrice,
(_req, res) => {
  res.status(201).json({ message: 'Activity created successfully!' });
});
module.exports = app;