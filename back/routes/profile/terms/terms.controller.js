const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    console.log('terms index 접근');
    res.render('index', { title: 'hi terms' });
});

module.exports = router;