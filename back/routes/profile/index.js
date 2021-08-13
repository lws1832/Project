const express = require('express');
const router = express.Router();

// Router
const noticeRouter = require('./notice');
const inquireRouter = require('./inquire');
const termsRouter = require('./terms');

router.get('/notice', noticeRouter);
router.get('/inquire', inquireRouter);
router.get('/terms', termsRouter);

// Controller
const profileController = require('./profile.controller');

router.get('/', profileController);

module.exports = router;