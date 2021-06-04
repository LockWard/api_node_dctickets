import Sequelize from "sequelize";
import { sequelize } from '../database/key.js';

const users = sequelize.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_user: {
        type: Sequelize.STRING(50),
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
    role_user: {
        type: Sequelize.STRING(20),
        defaultValue: "normal",
        allowNull: false
    },
    available_users: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    id_department: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: department,
            key: 'id_department'
        }
    }
});

export default users;