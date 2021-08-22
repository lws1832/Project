const express = require('express');
const router = express.Router();

// Controller
const bookmarkController = require('./bookmark.controller');

router.post('/post', bookmarkController.create);

module.exports = router;