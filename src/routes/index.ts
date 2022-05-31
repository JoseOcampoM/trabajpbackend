import { UsuarioRoutes } from "./usuario";
import { EjemplarRoutes } from "./ejemplar";
import { PrestarRoutes } from "./prestar";


export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes();
    public prestarRoutes: PrestarRoutes = new PrestarRoutes();
}