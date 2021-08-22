const { sequelize, Bookmark } = require('../../models');

const create = async (req,res) => {
    console.log('/inquire/create 접근');

    let {line, station, direction} = req.body;
    console.log('req.body : ', line, station, direction);

    let data = await Bookmark.create({
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
    .catch(err => {
    	console.log("bookmark create fail");
    })
}

module.exports = {
    create,
}