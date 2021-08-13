const express = require('express');
const router = express.Router();

// Controller
const userController = require('./user.controller');

router.get('/read', userController.read);
router.post('/create', userController.create);
router.patch('/update', userController.update);
router.delete('/delete', userController.destroy);

module.exports = router;