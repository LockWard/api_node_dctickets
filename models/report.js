import Sequelize from 'sequelize';
import { sequelize } from '../database/key.js';

const report = sequelize.define('report', {
    id_report: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255),
        defaultValue: "Sin descripcion.",
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: "no realizada",
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING(20),
        defaultValue: "ninguno",
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