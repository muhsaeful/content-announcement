const { Sequelize } = require("sequelize");

const mysql = new Sequelize('nodejs_announcement', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await mysql.authenticate();
        console.log('database success connection');
    } catch (error) {
        console.error('database failed connection');
    };
})();

module.exports = mysql;
