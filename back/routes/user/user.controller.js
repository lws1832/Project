const { sequelize, User } = require('../../models');

let read = async (req,res) => {
    console.log('/user/read 접근');

    let {  nickname} = req.query;
    // console.log('req.query : ',name, email, password);
   
    try {
        
        let result = await User.findOne({
           nickname:nickname,
       })
       console.log(result)
       res.json(result);
       
       console.log("user login success");
     } catch (error) {
       console.error(error);
       console.log('login창 에러')
     }	

}

let create = async (req,res) => {
    console.log('/user/create 접근');

    let { accessToken,id, name, email } = req.body;

    console.log('req.body : ', accessToken,id, name, email);
    try {
        let result = await User.create({
            accessToken:accessToken,
            idx:id,
            nickname:name,
            user_email:email,
        })
        res.json({result});
        console.log("user info success");
      } catch (error) {
        console.error(error);
        console.log('에러낫어')
      }	
      
}

let update = async (req, res) => {
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

let destroy = async (req, res) => {
    console.log('/user/destroy 접근');

    // let {id} = req.body;
    // console.log('req.body : ',id);
 
    let result = await User.destroy({
        
        where:{
            idx:1,
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