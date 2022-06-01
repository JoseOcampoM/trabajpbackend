import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Prestamo } from './Prestamo';
import { Usuario } from './Usuario';

export class Ejemplar extends Model {
    // public libroId!: number;
    public localizacion!: string;
    public activo!: Boolean;
}

export interface EjemplarI {
    // libroId: number;
    localizacion: string;
    activo: Boolean;
}

Ejemplar.init(
    {
        // libroId: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },

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

Usuario.belongsToMany(Ejemplar, {through: Prestamo});
Ejemplar.belongsToMany(Usuario, {through: Prestamo});

// Ejemplar.hasMany(Libro);
// Libro.belongsTo(Ejemplar);