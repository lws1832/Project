const { sequelize, User } = require('../../models');

// Read
const read = async (req,res) => {
    console.log('/user/read 접근');

    let result = await sequelize.query('select * from user;')
    .then(result => {
    	console.log("success");
    })
    .catch(err => {
    	console.log("fail");
    })

    res.json({
        result,
    });
}

// Create
const create = async (req,res) => {
    console.log('/user/create 접근');

    let {id, nickname, user_email, user_image} = req.body;
    console.log('req.body : ',id,nickname, user_email, user_image);

    let result = await User.create({
        id:id,
        nickname:nickname,
        user_email:user_email,
        user_image:user_image,
    })
    .then(result => {
    	console.log("success");
    })
    .catch(err => {
    	console.log("fail");
    })

    res.json({
        result,
    });
}

// Update
const update = async (req, res) => {
    console.log('/user/update 접근');

    let {id, nickname} = req.body;
    console.log('req.body : ',id, nickname);

    let result = await User.update({
        nickname:nickname,
    },{
        where:{
            nickname:nickname,
        }
    })
    .then(result => {
    	console.log("success");
    })
    .catch(err => {
    	console.log("fail");
    })

    res.json({
        result,
    })
}

// delete
const destroy = async (req, res) => {
    console.log('/user/destroy 접근');

    let {id, nickname} = req.body;
    console.log('req.body : ',id, nickname);
    
    let result = await User.destroy({
        where:{
            id:id,
            nickname:nickname,
        }
    })
    .then(result => {
    	console.log("success");
    })
    .catch(err => {
    	console.log("fail");
    })

    res.json({
        result,
    });
}

module.exports = {
    read,
    create,
    update,
    destroy,
}