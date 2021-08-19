const Api = require("./api_router");
const Home = require("./home_router");
const Dashboard = require("./dashboard_router");

const router = {};

router.Api = Api;
router.Home = Home;
router.Dashboard = Dashboard;

module.exports = router;