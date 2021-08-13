const express = require('express');
const router = express.Router();

// Controller
const mainController = require('./main.controller');

router.get('/', mainController);

module.exports = router;