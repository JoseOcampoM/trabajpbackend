import { Request, Response } from 'express';
import { Prestar, PrestarI } from '../models/Prestar';

export class PrestarController {
    public async getAllPrestar(req: Request, res: Response){
        try{
            const prestar: PrestarI[] = await Prestar.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({prestar})
        } catch(error){

        }
    }

    public async getOnePrestar(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const prestar: PrestarI | null = await Prestar.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true
                    }
                }
            )

            res.status(200).json(prestar)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createPrestar(req: Request, res: Response){
        const {
            UsuarioId,
            EjemplarId,
            fechaDev,
            fechapres,
            activo
        } = req.body;
        try{
            let body:PrestarI = {
                UsuarioId,
                EjemplarId,
                fechaDev,
                fechapres,
                activo
            }

            const prestar = await Prestar.create({...body});
            res.status(200).json({prestar})
        } catch(error){

        }
    }

    public async updatePrestar(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            UsuarioId,
            EjemplarId,
            fechaDev,
            fechapres,
            activo
        } = req.body

        try{
            let body:PrestarI = {
                UsuarioId,
                EjemplarId,
                fechaDev,
                fechapres,
                activo
            }

            const prestarExist: PrestarI | null = await Prestar.findByPk(pk);

            if(!prestarExist) return res.status(500).json({msg:"El usuario no esiste"})
            await Prestar.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const prestar: PrestarI | null = await Prestar.findByPk(pk);
        if (prestar) return res.status(200).json({prestar})

    }

    public async deletePrestar(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const prestarExist: PrestarI | null = await Prestar.findByPk(pk);
            if(!prestarExist) return  res.status(500).json({msg: "El usuario no existe"})
            await Prestar.update(
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