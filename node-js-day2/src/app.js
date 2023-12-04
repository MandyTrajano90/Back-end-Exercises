const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, 'movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Arquivo não lido: ${err}`);
  }
};

module.exports = app;