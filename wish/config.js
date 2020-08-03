// 默认dev配置
const config = {
    DEBUG: true,                                                // 是否调试模式
    // MySQL数据库连接配置
    MYSQL: {
        host: 'localhost',                                    // MySQL的主机地址
        database: 'wish',                                    // MySQL的数据库名
        username: 'root',                                    // MySQL的用户名
        password: ''                                          // MySQL的密码
    }
};
if (process.env.NODE_ENV === 'production') {
    // 生产环境MySQL数据库连接配置
    config.MYSQL = {
        host: 'aaa.mysql.rds.aliyuncs.com',
        database: 'aaa',
        username: 'aaa',
        password: 'aaa'
    };
}
module.exports = config;
