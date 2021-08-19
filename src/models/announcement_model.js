const { DataTypes, QueryInterface } = require("sequelize");
const mysql = require('../config/database/mysql_con');

const anct = mysql.define('announcement', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT(),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},
    {
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = anct;