const express = require('express');
const router = express.Router();

// Controller
const noticeController = require('./notice.controller');

router.get('/read', noticeController.read);
router.post('/create', noticeController.create);
router.patch('/update', noticeController.update);
router.delete('/delete', noticeController.destroy);

module.exports = router;