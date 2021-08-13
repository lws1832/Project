const express = require('express');
const router = express.Router();

// Router
const noticeRouter = require('./notice');
const inquireRouter = require('./inquire');
const termsRouter = require('./terms');

router.use('/notice', noticeRouter);
router.use('/inquire', inquireRouter);
router.use('/terms', termsRouter);

// Controller
const profileController = require('./profile.controller');

router.use('/', profileController);

module.exports = router;