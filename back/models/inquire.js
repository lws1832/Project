const Sequelize = require('sequelize');

module.exports = class Inquire extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            nickname:{  // user.js와 join 시 필요한 정보
                type:Sequelize.STRING(100),
                allowNull:false,
                unique:true,
            },
            title:{     // 문의 제목
                type:Sequelize.TEXT,
                allowNull:false,
            },
            content:{   // 문의 내용
                type:Sequelize.TEXT,
                allowNull:false,
            },
            inqDate:{   // 문의 날짜
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
            answer:{    // 답변 내용
                type:Sequelize.TEXT,
                allowNull:true,
            },
            ansDate:{   // 답변 날짜
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Inquire',
            tableName:'inquire',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
