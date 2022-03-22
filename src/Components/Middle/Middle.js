import "./Middle.css";


const Middle = () => {
  return (
    <div className="containerN">
      <div>
        <h1 className="titulo1N">
          17 años de experiencia en pos de tu proyecto
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr
            style={{
              color: "rgb(4,167,0)",
              height: "4px",
              width: "90px",
              margin: "20px",
            }}
          />
        </div>n
        <p className="texto1N">
          Especializados desde 1996 en usabilidad, experiencia del usuario (UX)
          y diseño de experiencias de proyectos digitales. Aportamos estrategia
          e innovación centrada en el usuario y los objetivos de negocio de tu
          proyecto. Cotrabajando mejoraremos tu tasa de conversión, KPI's, ROI y
          los resultados de tu actual publicidad PPC (pay per click)
        </p>
      </div>
      <div className="medioN">
        <div className="medio1N">
          <h1 className="titulosMedioN">Estrategias, usabilidad & UX</h1>
          <p className="parrafoMedioN">
            Te ofrecemos excelente usabilidad y experiencia del usuario en tu
            proyecto, junto a una visión innovadora
          </p>
        </div>
        <div className="medio2N">
          <h1 className="titulosMedioN">Mejoramos la experiencia </h1>
          <p className="parrafoMedioN">
            Tangibilizamos tu proyecto digital a través de un diseño centrado en
            el usuario y técnicas avanzadas
          </p>
        </div>
        <div className="medio3N">
          <h1 className="titulosMedioN">Medición continua de objetivos</h1>
          <p className="parrafoMedioN">
            Implementación, testing con usuarios y medición continua son
            necesarias para garantizar el éxito de tu proyecto
          </p>
        </div>
      </div>
      <div>
        <h1 className="titulo2N">Proyectos destacados</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr
            style={{
              color: "rgb(4,167,0)",
              height: "4px",
              width: "90px",
              margin: "20px",
            }}
          />
        </div>
        <p className="texto2N">
          Lorem ipsum dolor sit amet, consectetuer apidiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penaitubs
          et magnis dis parturient montes.
        </p>
      </div>
     
    </div>
  );
};

export default Middle;
