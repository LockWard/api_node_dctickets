import Sequelize from 'sequelize';
import { DataTypes } from '../database/key.js';

const users = DataTypes.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_user: {
        type: Sequelize.STRING(75),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password_user: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    available_users: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    id_role: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: role,
            key: 'id_role'
        }
    },
    id_department: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: department,
            key: 'id_department'
        }
    }
},{
    timestamps: false,
});

export default users;