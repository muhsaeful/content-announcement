const express = require("express");
const Dashboard = express.Router();

const dashboard = require('../../controllers/dashboard');

Dashboard.get('/', dashboard.index);
Dashboard.get('/announcement', dashboard.announcement_view);
Dashboard.post('/announcement', dashboard.announcement_create);
Dashboard.put('/announcement/(:id)', dashboard.announcement_update);
Dashboard.delete('/announcement/(:id)', dashboard.announcement_delete);

module.exports = Dashboard;