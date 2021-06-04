import Sequelize from 'sequelize';
import { sequelize } from '../database/key.js';

sequelize.define('department' , {
    id_department: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_department: {
        type: Sequelize.STRING(50),
        defaultValue: "[Sin nombre]",
        allowNull: false
    },
    available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});