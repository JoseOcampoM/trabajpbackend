
import { request, Response, Application } from "express";
import { LibroController } from "../controllers/LibroController";

export class LibroRoutes{
    public librocontroller: LibroController = new LibroController();
    public routes(app: Application): void{
        app.route("/libros").get(this.librocontroller.getAllLibro)
        app.route("/libro/:id").get(this.librocontroller.getOnelibro)
        app.route("/crearlibro").post(this.librocontroller.createLibro)
        app.route("/actualibro/:id").patch(this.librocontroller.updateLibro)
        app.route("/delelibro/:id").patch(this.librocontroller.deleteLibro)
    }
}