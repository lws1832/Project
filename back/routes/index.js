const express = require('express');
const router = express.Router();

// Router
const mainRouter = require('./main');
const userRouter = require('./user');
const bookmarkRouter = require('./bookmark');
const profileRouter = require('./profile');

router.use('/', mainRouter);
router.use('/user', userRouter);
router.use('/bookmark', bookmarkRouter);
router.use('/profile', profileRouter);

module.exports = router;