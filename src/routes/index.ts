import { UsuarioRoutes } from "./usuario";
import { EjemplarRoutes } from "./ejemplar";
import { PrestamoRoutes } from "./prestamo";
import { AutorRoutes } from "./Autor";
import { LibroRoutes } from "./Libro";

export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes();
    public prestamoRoutes: PrestamoRoutes = new PrestamoRoutes();
    public autorRoutes: AutorRoutes = new AutorRoutes();
    public libroRoutes: LibroRoutes = new LibroRoutes();
}