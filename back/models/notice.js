const Sequelize = require('sequelize');

module.exports = class Notice extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{     // 공지사항 제목
                type:Sequelize.TEXT,
                allowNull:false,
            },
            content:{   // 공지사항 내용
                type:Sequelize.TEXT,
                allowNull:false,
            },
            date:{      // 작성 날짜
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Notice',
            tableName:'notice',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
