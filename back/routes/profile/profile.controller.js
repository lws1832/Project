const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    console.log('profile index 접근');
    res.render('index', { title: 'hi profile' });
});

module.exports = router;