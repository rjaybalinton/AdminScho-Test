const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');
const routes = require('./routes/router'); // Import routes from router.js

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(7200, () => {
    console.log('server running on http://localhost:7200');
});
