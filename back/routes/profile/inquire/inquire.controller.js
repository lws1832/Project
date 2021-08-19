const { sequelize, Inquire } = require('../../../models');

const create = async (req,res) => {
    console.log('/inquire/create 접근');

    let {title, content} = req.body;
    console.log('req.body : ', title, content);

    let data = await Inquire.create({
        title:title,
        content:content,
    })
    .then(result => {
        res.json({
            result,
        });
    	console.log("inquire create success");
    })
    .catch(err => {
    	console.log("inquire create fail");
    })

    // let user_email = req.body.user_email;
    // let admin_email = 'proazel@naver.com';

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'youremail@gmail.com',  // gmail 계정 아이디를 입력
    //         pass: 'yourpassword'          // gmail 계정의 비밀번호를 입력
    //     }
    // });

    // let mailOptions = {
    //     from: 'youremail@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    //     to: admin_email,                     // 수신 메일 주소
    //     subject: 'Sending Email using Node.js',   // 제목
    //     text: 'That was easy!'  // 내용
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     }
    //     else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
}

module.exports = {
    create,
}