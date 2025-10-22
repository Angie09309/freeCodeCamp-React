import React from "react";
import "./App.css";
import Testimonio from "./componentes/Testimonio";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos</h1>
          <Testimonio
            nombre="Carlos López"
            pais="Brasil"
            imagen="hombre"
            cargo="Ingeniero de Software"
            empresa="Spotify"
            testimonio="Desde que comencé a estudiar en freeCodeCamp, logré mejorar mis habilidades en desarrollo web y conseguir un empleo en una empresa internacional. Me encanta cómo explican los temas paso a paso."
          />

          <Testimonio
            nombre="María Fernández"
            pais="México"
            imagen="mujer1"
            cargo="Desarrolladora Full Stack"
            empresa="Microsoft"
            testimonio="FreeCodeCamp fue la base de mi carrera en tecnología. Aprendí a construir aplicaciones completas y entendí cómo trabajar en equipo en proyectos reales."
          />

          <Testimonio
            nombre="Laura Gómez"
            pais="Argentina"
            imagen="mujer2"
            cargo="Ingeniera en Datos"
            empresa="Amazon"
            testimonio="Gracias a las guías y ejercicios prácticos de freeCodeCamp, pude dominar Python y análisis de datos. Hoy trabajo en una de las empresas más grandes del mundo gracias a esa formación."
          />
        </div>
      </div>
    );
  }
}

export default App;
