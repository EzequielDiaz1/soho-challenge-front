import './App.css';
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle';
import Project from "./Components/Project/Project";
import Clients from './Components/Clients/Clients';
import Footer from './Components/Footer/Footer';

const data = [
  {
    siteImageUrl: "https://i.ibb.co/J5YQ2Df/proyecto1.jpg",
    backgroundColor: "rgb(34,59,130)",
    logoImageUrl: "https://i.ibb.co/9h1bRwG/proyecto-1logo.png",
    tituloProyecto: "Sitio publico y privado",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam ",
    tags: "usabilidad,ui,ux,test con usuarios",
  },
  {
    siteImageUrl: "https://i.ibb.co/NTRvxcH/proyecto2.png",
    logoImageUrl: "https://i.ibb.co/7NSdrLk/proyecto2logo.png",
    backgroundColor: "rgb(201,44,58)",
    tituloProyecto: "Sitios web 2017",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam ",
    tags: "responsive, ui, ux",
  },
  {
    siteImageUrl: "https://i.ibb.co/m5pyJPG/proyecto3.png",
    logoImageUrl: "https://i.ibb.co/KxGJL6k/proyecto3logo.png",
    backgroundColor: "rgb(255,255,255)",
    tituloProyecto: "TV App",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam ",
    tags: "usabilidad,ui,ux,test con usuarios",
  },
];


function App() {
  return (
    <div className="App">
      <Home/>
      <div style={{backgroundColor:'rgb(39,49,56)'}}>
        <Middle/>
      </div>
      {data.map(project => (
          <Project props={project}/>
      ))}      
      <div style={{backgroundColor:'rgb(39,49,56)'}}>
      <Clients/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
