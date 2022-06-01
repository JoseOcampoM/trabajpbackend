import { Request, Response } from 'express';
import { Ejemplar } from '../models/Ejemplar';
import { Prestamo, PrestamoI } from '../models/Prestamo';
import { Usuario } from '../models/Usuario';

export class PrestamoController {
    public async getAllPrestamo(req: Request, res: Response){
        try{
            const prestamo: PrestamoI[] = await Prestamo.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({prestamo})
        } catch(error){

        }
    }

    public async getOnePrestamo(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const prestamo: PrestamoI | null = await Prestamo.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true
                    }
                }
            )

            res.status(200).json(prestamo)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createPrestamo(req: Request, res: Response){
        const {
            UsuarioId,
            EjemplarId,
            fechaDev,
            fechapres,
            activo
        } = req.body;
        try{
            let body:PrestamoI = {
                UsuarioId,
                EjemplarId,
                fechaDev,
                fechapres,
                activo
            }

            const prestamo = await Prestamo.create({...body});
            res.status(200).json({prestamo})
        } catch(error){

        }
    }

    public async updatePrestamo(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            UsuarioId,
            EjemplarId,
            fechaDev,
            fechapres,
            activo
        } = req.body

        try{
            let body:PrestamoI = {
                UsuarioId,
                EjemplarId,
                fechaDev,
                fechapres,
                activo
            }

            const prestamoExist: PrestamoI | null = await Prestamo.findByPk(pk);

            if(!prestamoExist) return res.status(500).json({msg:"El usuario no esiste"})
            await Prestamo.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const prestamo: PrestamoI | null = await Prestamo.findByPk(pk);
        if (prestamo) return res.status(200).json({prestamo})

    }

    public async deletePrestamo(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const prestamoExist: PrestamoI | null = await Prestamo.findByPk(pk);
            if(!prestamoExist) return  res.status(500).json({msg: "El usuario no existe"})
            await Prestamo.update(
                {
                    activo: false,
                },
                {
                    where: {id:pk}
                }
            );

            return res.status(200).json({msg: "Usuario Eliminado"});


        }catch(error){
            
        }
        
    }
    
     
}