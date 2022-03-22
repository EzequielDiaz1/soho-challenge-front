import img from "./../../assets/logo-soho (1).png";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="contenedorNavbar">
        <img src={img}/>
        <div>
            <a class="active">Inicio</a>
            <a>Nosotros</a>
            <a>Servicios</a>
            <a>Casos de éxito</a>
            <a>Únete al equipo</a>
            <a>Contacto</a>
        </div>
    </div>
  )
}

export default Navbar