import Sequelize from 'sequelize';
import { DataTypes } from '../database/key.js';

const report = DataTypes.define('report', {
    id_report: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255),
        defaultValue: "Sin descripción.",
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: "Sin realizar",
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING(20),
        defaultValue: "Ninguna",
        allowNull: false
    },
    date_report: {
        type: Sequelize.DATETIME,
        defaultvalue: Sequelize.NOW,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: users,
            key: 'id_user'
        }
    }
});

export default report;