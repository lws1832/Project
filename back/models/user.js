const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            idx:{   // 고유 ID값(필수)
                type:Sequelize.STRING(100),
                allowNull:false,
                unique:true,
            },      // 닉네임(필수)
            nickname:{
                type:Sequelize.STRING(100),
                allowNull:false,
                unique:true,
            },      // 이메일(필수)
            user_email:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },      // 이미지(선택)
            user_image:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },      // 최초 로그인 날짜
            joindate:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },      // 토큰값
            accessToken:{
                type:Sequelize.STRING(300),
                allowNull:false,
                unique:true,
            },
        }, {
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'user',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};