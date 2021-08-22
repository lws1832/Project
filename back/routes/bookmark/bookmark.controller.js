const { sequelize, Bookmark } = require('../../models');

let read = async (req, res) => {
    console.log('/bookmark/read 접근');

    let data = await Bookmark.findAll({})
    .then(result => {
        res.json({
            result,
        });
        console.log("bookmark test success");
    })
    .catch(e => {
    	console.log("bookmark test fail");
    })
}

let create = async (req,res) => {
    console.log('/bookmark/create 접근');

    let {idx, line, station, direction} = req.body;
    console.log('req.body : ', idx, line, station, direction);

    let data = await Bookmark.create({
        idx:idx,
        line:line,
        station:station,
        direction:direction,
    })
    .then(result => {
        res.json({
            result,
        });
    	console.log("bookmark create success");
    })
    .catch(e => {
    	console.log("bookmark create fail");
    })
}

module.exports = {
    read,
    create,
}