const express = require("express");
const Home = express.Router();

const home = require("../../controllers/home");

Home.get('/', home.index);
Home.get('/content/(:slug)', home.content);

module.exports = Home;