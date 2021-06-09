import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'dctickets',
    'postgres',
    'password',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    });
