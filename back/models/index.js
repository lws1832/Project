'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const User = require('./user');
const Bookmark = require('./bookmark');
const Notice = require('./notice');
const Inquire = require('./inquire');
const Terms = require('./terms');

let sequelize;
if (config.use_env_variable){
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else{
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Bookmark = Bookmark;
db.Notice = Notice;
db.Inquire = Inquire;
db.Terms = Terms;

User.init(sequelize);
Bookmark.init(sequelize);
Notice.init(sequelize);
Inquire.init(sequelize);
Terms.init(sequelize);

module.exports = db;