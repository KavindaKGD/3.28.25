const express = require('express');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger); // Logging every request

// Routes
app.use('/api', userRoutes);

module.exports = app;
