const express = require('express');
const router = express.Router();

// Controller
const noticeController = require('./notice.controller');

router.get('/', noticeController);

module.exports = router;