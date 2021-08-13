const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    console.log('notice index 접근');
    res.render('index', { title: 'hi notice' });
});

module.exports = router;