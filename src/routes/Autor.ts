import { Request, Response, Application } from 'express';

import { AutorController } from '../controllers/AutorController';

export class AutorRoutes {
    public autorController: AutorController = new AutorController();
    
    public routes(app: Application): void{
        app.route("/autores").get(this.autorController.getAllAutor)
        app.route("/autor/:id").get(this.autorController.getOneautor)
        app.route("/crearautor").post(this.autorController.createAutor)
        app.route("/actuautor/:id").patch(this.autorController.updateAutor)
        app.route("/delautor/:id").patch(this.autorController.deleteAutor)

    }
}