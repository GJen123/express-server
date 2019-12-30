const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const HealthCheckRoute = require('./routes/HealthCheckRoute');

const app = express();

// CORS-enabled for all origins
app.use(cors());

// support application/json type post data.
app.use(bodyParser.json());

// support application/x-www-form-urlencoded post data.
app.use(bodyParser.urlencoded({
    extended: false,
}));

// Register health check route
HealthCheckRoute(app);

module.exports = app;
