import "./App.css";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Project from "./Components/Project/Project";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    setWaiting(true);
    axiosInstance
      .get(`http://localhost:3001/projects`)
      .then((responses) => {
        setData(responses.data.data.rows);
        setWaiting(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <Home />
      <div style={{ backgroundColor: "rgb(39,49,56)" }}>
        <Middle />
      </div>
      <div className="containerApp">
        {waiting ? (
          <div  id="asd1" class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        ) : null}
        {error ? (
          <h1 id="asd">
            Tenemos dificultades con nuestro servidor, ¿podrías intentar más
            tarde? 🥺
          </h1>
        ) : (
          data.map((project) => <Project props={project} />)
        )}
      </div>
      <div style={{ backgroundColor: "rgb(39,49,56)" }}>
        <Clients />
      </div>
      <Footer />
    </div>
  );
}

export default App;
