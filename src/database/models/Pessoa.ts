import { DataTypes } from 'sequelize';

import sequelize from '../pg_connection';


const Pessoa = sequelize.define('Pessoa',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'pessoa',
        schema: 'public',
        timestamps: true,
    }
);

export default Pessoa;
