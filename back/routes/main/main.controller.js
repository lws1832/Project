const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'npm' },
    { id: 3, name: 'Pengsu' },
]

// 읽기
router.get('/', function (req, res, next) {
    res.json(users);
});

// 쓰기
router.post('/', function (req, res, next) {
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user);
    res.send(user);
});

// 수정
router.put('/:id', function (req, res, next) {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) { return res.status(404).send('ID was not found.'); }

    user.name = req.body.name;
    res.send(user);
    console.log(users);
});

// 삭제
router.delete('/:id', function (req, res, next) {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) { return res.status(404).send('ID was not found.'); }

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
    console.log(users);
});

module.exports = router;