const express = require('express');
const app = express();
const path = require('path');
const morgan=require('morgan')
const cors = require('cors');
const planets = require('./routes/planets/planets.router');
const launch=require('./routes/launches/launches.router')
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan("combined"))
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Use your planets router
app.use(planets);
app.use('/launches',launch);
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

module.exports = app;
