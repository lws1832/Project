const Sequelize = require('sequelize');

module.exports = class Bookmark extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            idx:{       // user.js와 join 시 필요한 정보
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            line:{      // 호선
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            station:{   // 역 이름
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            direction:{ // 방향
                type:Sequelize.STRING(50),
                allowNull:false,
                unique:true,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Bookmark',
            tableName:'bookmark',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};