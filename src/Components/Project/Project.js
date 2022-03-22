import "./Project.css";
import { useState, useEffect } from "react";

const Project = ({ props }) => {
  console.log('PROPSSS:', props)
  const [blackNecess, setBlackNecess] = useState(false);
  const {
    tituloProyecto,
    logoImageUrl,
    siteImageUrl,
    descripcion,
    backgroundColor,
  } = props;
 
  useEffect(() => {
    if (backgroundColor === "rgb(255,255,255)") {
      setBlackNecess(true);
    }
  }, [])
  



  return (
    <div style={{ backgroundColor }} className="padre">
      <div className="logoTitulo">
        <h1           style={blackNecess ? { color: "black" } : { color: "white" }}
 className="titulo">{tituloProyecto}</h1>
        <img style={{ width: "180px", height: "64px" }} src={logoImageUrl} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <hr
          style={{
            color: "white",
            height: "4px",
            width: "800px",
            marginBottom: "20px",
          }}
        />
      </div>
      <div className="fotoDescr">
        <p
          style={blackNecess ? { color: "black" } : { color: "white" }}
          className="descripcion"
        >
          {descripcion}
        </p>
        <img src={siteImageUrl} />
      </div>
    </div>
  );
};

export default Project;
