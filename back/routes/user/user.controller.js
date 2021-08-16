const { sequelize, User } = require('../../models');

let read = async (req,res) => {
    console.log('/user/read 접근');

    let { name, email, password } = rep.query;
    console.log('req.query : ',name, email, password);
    result;
    try {
        
        result = await User.findAll({
           nickname:name,
           user_email:email,
           user_password:password,
       })
       console.log("user login success");
     } catch (error) {
       console.error(error);
       console.log('login창 에러')
     }	
   res.json(result);

}

let create = async (req,res) => {
    console.log('/user/create 접근');

    let { name, email, password } = req.body;
    console.log('req.body : ', name, email, password);
    try {//포스트맨에서 샌드하면 로딩만 계속 돌고 디비에는 들어가는걸 알 수 있음 대신 
        // 실제 화면에서 회원가입 정보입력하고 가입하기 누르면 디비에 안들어감
        await User.create({
            nickname:name,
            user_email:email,
            user_password:password,
        })
        console.log("user info success");

      } catch (error) {
        console.error(error);
        console.log('에러낫어')
      }	
      res.json(result);
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