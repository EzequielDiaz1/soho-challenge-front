import './Clients.css'

const Clients = () => {
  return (
    <div className="container">
      <div>
        <h1 className="titulo1">
          Lo que dicen nuestros clientes
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
        </div>
       
      </div>
      <div className="medio">
        <div className="medio1">
          <p className="parrafoMedio">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in."
          </p>
          <h1 className="titulosMedio">Cristobal Fernandez - CEO Copec</h1>

        </div>
        <div className="medio2">
          <p className="parrafoMedio">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in."

            <h1 className="titulosMedio">Maria Paz Segers - Lead Digital BBVA</h1>

          </p>
        </div>
        <div className="medio3">
          <p className="parrafoMedio">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in."

          </p>
          <h1 className="titulosMedio">Renato Bascuñán - Lead Digital Chilena</h1>

        </div>
      </div>
      
      <button className="centrado1337">HABLEMOS DE TU PROYECTO</button>
    </div>
  )
}

export default Clients