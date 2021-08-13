const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    console.log('inquire index 접근');
    res.render('index', { title: 'hi inquire' });
});

module.exports = router;