const express = require('express');
const router = express.Router();

// Controller
const inquireController = require('./inquire.controller');

router.get('/', inquireController);

module.exports = router;