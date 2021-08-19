const express = require("express");
const Api = express.Router();
const cors = require("cors");

const api = require("../../controllers/api");

Api.use(cors());
Api.get('/', api.views);
Api.get('/(:id)', api.view);
Api.post('/', api.create);
Api.put('/(:id)', api.update);
Api.delete('/(:id)', api.delete);

module.exports = Api;