import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Usuario } from './Usuario';

export class Prestar extends Model {
    public UsuarioId!: number;
    public EjemplarId!: number;
    public fechaDev!: string;
    public fechapres!: string;
    public activo!: Boolean;
}

export interface PrestarI {
    UsuarioId: number;
    EjemplarId: number;
    fechaDev: Date;
    fechapres: Date;
    activo: Boolean;
}

Prestar.init(
    {
        UsuarioId: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        EjemplarId: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

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
        timestamps: true
    }
)