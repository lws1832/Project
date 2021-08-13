const express = require('express');
const router = express.Router();

// Controller
const termsController = require('./terms.controller');

router.get('/', termsController);

module.exports = router;