const Sequelize = require('sequelize');                  // 引入Sequelize模块
const db = require('../db');                                    // 引入数据库实例
// 定义model
const Wish = db.define('Wish', {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
        autoIncrement: true},                                                            // 主键
    name: {type: Sequelize.STRING(20), allowNull: false},      // 许愿姓名
    content: {type: Sequelize.STRING, allowNull: false}            // 许愿内容
}, {
    underscored: true,                                                // 是否支持驼峰
    tableName: 'wish',                                                // MySQL数据库表名
});
module.exports = Wish;                                                // 导出model
