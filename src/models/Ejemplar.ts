import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Libro } from './Libro';

export class Ejemplar extends Model {
    public localizacion!: string;
    public LibroId!: number 
    public activo!: boolean;
}

export interface EjemplarI {
    localizacion: string;
    LibroId: number;
    activo: boolean;
}

Ejemplar.init(
    {
        localizacion: {
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
        tableName: 'ejemplares',
        sequelize: database,
        timestamps: false
    }
)

Libro.hasMany(Ejemplar);
Ejemplar.belongsTo(Libro);