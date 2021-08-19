const express = require('express');
const router = express.Router();

// Controller
const bookmarkController = require('./bookmark.controller');

router.get('/', bookmarkController);

module.exports = router;