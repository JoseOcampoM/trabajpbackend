import { Request, Response, Application } from 'express';

import { EjemplarController } from '../controllers/ejemplar.controllers';

export class EjemplarRoutes {
    public ejemplarController: EjemplarController = new EjemplarController();
    
    public routes(app: Application): void{
        app.route("/ejemplares").get(this.ejemplarController.getAllEjemplar)
        app.route("/ejemplares/:id").get(this.ejemplarController.getOneEjemplar)
        app.route("/createejemplar").post(this.ejemplarController.createEjemplar)
        app.route("/actejemplar/:id").patch(this.ejemplarController.updateEjemplar)
        app.route("/delejemplar/:id").patch(this.ejemplarController.deleteEjemplar)

    }
}