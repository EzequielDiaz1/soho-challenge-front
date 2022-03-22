/* eslint-disable jsx-a11y/alt-text */
import Navbar from "../Navbar/Navbar";
import imgTransm from "../../assets/logoTransm.png"
import "./Home.css";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
      <div className="contenedor">
        <div className="texto-encima"><Navbar/></div>
        <div className="centrado">Nos especializamos en</div>
        <div className="centrado2">interfaces digitales que los usuarios aman</div>
        <button className="centrado3">HABLEMOS DE TU PROYECTO</button>
        <div className="texto-debajo">
          <img className="imagenTransm" src={imgTransm}/>
          <p><strong>EN DIRECTO</strong> - SOHO está presente en el <strong>DIGITALBANK MONTEVIDEO</strong>. "Experiencia de Usuario" por Alvaro Añón (SEO de Soho)</p>
          <div style={{display:'flex'}}>
          <button className="buttonTransm">VER EVENTO</button>
          <button className="buttonEvents">PRÓXIMOS EVENTOS</button>

          </div>
        </div>
      </div>
  );
};

export default Home;
