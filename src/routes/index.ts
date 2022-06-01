import { UsuarioRoutes } from "./usuario";
import { EjemplarRoutes } from "./ejemplar";
import { PrestamoRoutes } from "./prestamo";


export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes();
    public prestamoRoutes: PrestamoRoutes = new PrestamoRoutes();
}