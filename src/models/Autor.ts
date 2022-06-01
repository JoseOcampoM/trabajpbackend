import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Autor extends Model {
    public nombre!: string;
    public activo!: Boolean;
}

export interface AutorI {
    nombre: string;
    activo: Boolean;
}

Autor.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'autores',
        sequelize: database,
        timestamps: false
    }
)