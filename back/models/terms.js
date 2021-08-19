const Sequelize = require('sequelize');

module.exports = class Terms extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{     // 약관 사항명
                type:Sequelize.TEXT,
                allowNull:false,
            },
            content:{   // 약관 내용
                type:Sequelize.TEXT,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Terms',
            tableName:'terms',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
