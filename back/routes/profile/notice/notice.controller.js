const { sequelize, Notice } = require('../../../models');

// Read
const read = async (req,res) => {
    console.log('/notice/read 접근');

    let data = await sequelize.query('select * from notice order by id desc;')
    .then(result => {
        res.json({
            result:result[0],
        });
        console.log("notice read success");
    })
    .catch(err => {
    	console.log("notice read fail");
    })
}

// Create
const create = async (req,res) => {
    console.log('/notice/create 접근');

    let {title, content} = req.body;
    console.log('req.body : ', title, content);

    let data = await Notice.create({
        title:title,
        content:content,
    })
    .then(result => {
        res.json({
            result,
        });
    	console.log("notice create success");
    })
    .catch(err => {
    	console.log("notice create fail");
    })
}

// Update
const update = async (req, res) => {
    console.log('/notice/update 접근');

    let {id, title, content} = req.body;
    console.log('req.body : ', title, content);

    let data = await Notice.update({
        title, content
    },{
        where:{
            id:id,
        }
    })
    .then(result => {
        res.json({
            result,
        })
    	console.log("notice update success");
    })
    .catch(err => {
    	console.log("notice update fail");
    })
}

// Delete
const destroy = async (req, res) => {
    console.log('/notice/delete 접근');

    let {id} = req.body;
    
    let result = await Notice.destroy({
        where:{
            id:id,
        }
    })
    .then(result => {
        res.json({
            result,
        });
    	console.log("notice delete success");
    })
    .catch(err => {
    	console.log("notice delete fail");
    })
}

module.exports = {
    read,
    create,
    update,
    destroy,
}