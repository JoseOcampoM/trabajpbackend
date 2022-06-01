import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Ejemplar } from './Ejemplar';
import { Usuario } from './Usuario';

export class Prestamo extends Model {
    public UsuarioId!: number;
    public EjemplarId!: number;
    public fechaDev!: Date;
    public fechapres!: Date;
    public activo!: Boolean;
}

export interface PrestamoI {
    UsuarioId: number;
    EjemplarId: number;
    fechaDev: Date;
    fechapres: Date;
    activo: Boolean;
}

Prestamo.init(
    {
        fechaDev: {
            type: DataTypes.DATE,
            allowNull: false
        },

        fechapres: {
            type: DataTypes.DATE,
            allowNull: false
        },
        
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        tableName: 'prestamos',
        sequelize: database,
        timestamps: false
    }
)

Usuario.belongsToMany(Ejemplar, {through: Prestamo});
Ejemplar.belongsToMany(Usuario, {through: Prestamo});