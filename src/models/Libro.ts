import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Autor } from './Autor';

export class Libro extends Model {
    public titulo!: string;
    public numero_pagina!: number;
    public editorial!: string;
    public isbn!: string;
    public AutorId!: number 
    public activo!: boolean;
}

export interface LibroI {
    titulo: string;
    numero_pagina: number;
    editorial: string;
    isbn: string;
    AutorId: number;
    activo: boolean;
}

Libro.init(
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_pagina: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        editorial: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
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
        tableName: 'libros',
        sequelize: database,
        timestamps: false
    }
)

Autor.hasMany(Libro);
Libro.belongsTo(Autor);