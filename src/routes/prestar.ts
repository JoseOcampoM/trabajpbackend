import { Request, Response, Application } from 'express';

import { PrestarController } from '../controllers/prestar.controllers';

export class PrestarRoutes {
    public prestarController: PrestarController = new PrestarController();
    
    public routes(app: Application): void{
        app.route("/prestamos").get(this.prestarController.getAllPrestar)
        app.route("/prestamos/:id").get(this.prestarController.getOnePrestar)
        app.route("/createprestamos").post(this.prestarController.createPrestar)
        app.route("/actprestamos/:id").patch(this.prestarController.updatePrestar)
        app.route("/delprestamos/:id").patch(this.prestarController.deletePrestar)

    }
}