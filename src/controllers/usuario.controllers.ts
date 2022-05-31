import { Request, Response } from 'express';
import { Usuario, UsuarioI } from '../models/Usuario';

export class UsuarioController {
    public async getAllUsuario(req: Request, res: Response){
        try{
            const user: UsuarioI[] = await Usuario.findAll(
                {
                    where: {activo : true}
                }
            )
            res.status(200).json({user})
        } catch(error){

        }
    }

    public async getOneUsuario(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const user: UsuarioI | null = await Usuario.findOne(
                {
                    where: {
                        id: idParam,
                        activo: true
                    }
                }
            )

            res.status(200).json(user)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createUsuario(req: Request, res: Response){
        const {
            nombre,
            apellido,
            direccion,
            telefono,
            activo
        } = req.body;
        try{
            let body:UsuarioI = {
                nombre,
                apellido,
                direccion,
                telefono,
                activo
            }

            const user = await Usuario.create({...body});
            res.status(200).json({user})
        } catch(error){

        }
    }

    public async updateUsuario(req: Request, res: Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            apellido,
            direccion,
            telefono,
            activo
        } = req.body

        try{
            let body:UsuarioI = {
                nombre,
                apellido,
                direccion,
                telefono,
                activo
            }

            const userExist: UsuarioI | null = await Usuario.findByPk(pk);

            if(!userExist) return res.status(500).json({msg:"El usuario no esiste"})
            await Usuario.update(
                body, {
                    where: {id:pk}
                }
            );

        } catch(error){

        }

        const user: UsuarioI | null = await Usuario.findByPk(pk);
        if (user) return res.status(200).json({user})

    }

    public async deleteUsuario(req: Request, res: Response){
        const { id:pk } = req.params;
        try{
            const userExist: UsuarioI | null = await Usuario.findByPk(pk);
            if(!userExist) return  res.status(500).json({msg: "El usuario no existe"})
            await Usuario.update(
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