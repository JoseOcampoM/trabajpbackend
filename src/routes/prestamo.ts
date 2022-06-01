import { Request, Response, Application } from 'express';

import { PrestamoController } from '../controllers/prestamo.controllers';

export class PrestamoRoutes {
    public prestamoController: PrestamoController = new PrestamoController();
    
    public routes(app: Application): void{
        app.route("/prestamos").get(this.prestamoController.getAllPrestamo)
        app.route("/prestamos/:id").get(this.prestamoController.getOnePrestamo)
        app.route("/createprestamos").post(this.prestamoController.createPrestamo)
        app.route("/actprestamos/:id").patch(this.prestamoController.updatePrestamo)
        app.route("/delprestamos/:id").patch(this.prestamoController.deletePrestamo)

    }
}