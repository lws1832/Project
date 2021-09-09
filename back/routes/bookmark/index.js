const express = require('express');
const router = express.Router();

// Controller
const bookmarkController = require('./bookmark.controller');

router.get('/read', bookmarkController.read);
router.post('/create', bookmarkController.create);

module.exports = router;