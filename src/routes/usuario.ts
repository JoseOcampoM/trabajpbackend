import { Request, Response, Application } from 'express';

import { UsuarioController } from '../controllers/usuario.controllers';

export class UsuarioRoutes {
    public usuarioController: UsuarioController = new UsuarioController();
    
    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        app.route("/usuario/:id").get(this.usuarioController.getOneUsuario)
        app.route("/createusuario").post(this.usuarioController.createUsuario)
        app.route("/actusuario/:id").patch(this.usuarioController.updateUsuario)
        app.route("/delusuario/:id").patch(this.usuarioController.deleteUsuario)

    }
}