const express = require('express');
const router = express.Router();

// Controller
const inquireController = require('./inquire.controller');

router.post('/post', inquireController.create);

module.exports = router;