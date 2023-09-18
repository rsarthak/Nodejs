const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const planets = require('./routes/planets/planets.router');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Use your planets router
app.use(planets);

// You don't need to explicitly specify serving 'index.html' here.
// When you access the root URL, Express will look for and serve 'index.html' by default.

module.exports = app;
