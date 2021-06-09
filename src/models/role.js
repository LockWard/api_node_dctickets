import Sequelize from 'sequelize';
import { sequelize } from '../database/key.js';

const role = sequelize.define('role', {
    id_role: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_role: {
        type: Sequelize.STRING(20),
        defaultValue: 'usuario',
        allowNull: false
    }
},{
    timestamps: false,
});

export default role;