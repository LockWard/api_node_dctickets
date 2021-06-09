import Sequelize from 'sequelize';
import { DataTypes } from '../database/key.js';
import users from '../models/users.js';

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
    timestamps: false,
});

department.hasMany(users, {foreignKey: 'id_user', sourceKey: 'id'});
users.belongsTo(department, {foreignKey: 'id_department', sourceKey: 'id'});

export default department;