import Sequelize from 'sequelize';
import { DataTypes } from '../database/key.js';

const department = DataTypes.define('department', {
    id_department: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_department: {
        type: Sequelize.STRING(45),
        defaultValue: "[Sin nombre]",
        allowNull: false
    },
    available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
},{

});

export default department;