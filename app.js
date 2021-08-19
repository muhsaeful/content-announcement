const express = require("express");
const path = require("path");
require('dotenv').config();

const router = require("./src/middleware/routers/_index_routers");

let app = express();
let port = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.locals.baseURL = process.env.baseURL || `http://localhost:${port}`
app.use('/public', express.static(path.join(__dirname, 'src/public')));
app.set('views', 'src/public/views');
app.set('view engine', 'ejs');

app.use('/api', router.Api);
app.use('/dashboard', router.Dashboard);
app.use('/', router.Home);

app.listen(port, function () {
    console.log(`app running on port ${app.locals.baseURL}`);
});