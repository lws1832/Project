const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    console.log('bookmark index 접근');
    res.render('index', { title: 'hi bookmark' });
});

module.exports = router;