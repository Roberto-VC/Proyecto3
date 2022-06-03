/*
    Tutorial de donde se inspiro el proyecto
    https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm

*/

import React from "react"
import "./App.scss"
import Webpack from "./Assets/Webpack.png"
import babel from "./Assets/babel.png"
import react from "./Assets/React.png"
import eslint from "./Assets/Eslint.png"
import jest from "./Assets/Jest.png"
import Html from "./Assets/Html.png"
import CSS from "./Assets/CSS.png"
import JS from "./Assets/JS.png"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

document.body.style.backgroundColor = "lightblue"

function myWebpack() {
  document.getElementById("D-Webpack").style.display = "grid"
  document.getElementById("D-Babel").style.display = "none"
  document.getElementById("D-React").style.display = "none"
  document.getElementById("D-Linting").style.display = "none"
  document.getElementById("D-Jest").style.display = "none"
}

function myBabel() {
  document.getElementById("D-Webpack").style.display = "none"
  document.getElementById("D-Babel").style.display = "grid"
  document.getElementById("D-React").style.display = "none"
  document.getElementById("D-Linting").style.display = "none"
  document.getElementById("D-Jest").style.display = "none"
}

function myReact() {
  document.getElementById("D-Webpack").style.display = "none"
  document.getElementById("D-Babel").style.display = "none"
  document.getElementById("D-React").style.display = "grid"
  document.getElementById("D-Linting").style.display = "none"
  document.getElementById("D-Jest").style.display = "none"
}

function myEsLint() {
  document.getElementById("D-Webpack").style.display = "none"
  document.getElementById("D-Babel").style.display = "none"
  document.getElementById("D-React").style.display = "none"
  document.getElementById("D-Linting").style.display = "grid"
  document.getElementById("D-Jest").style.display = "none"
}

function myJest() {
  document.getElementById("D-Webpack").style.display = "none"
  document.getElementById("D-Babel").style.display = "none"
  document.getElementById("D-React").style.display = "none"
  document.getElementById("D-Linting").style.display = "none"
  document.getElementById("D-Jest").style.display = "grid"
}

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1>Portafolio Personal</h1>
        <h2>Proyecto Final</h2>
        <p>
          Durante el Semeste, se vieron diferentes tecnologías
          <br />
          Sobre Sistemas y Tecnologías Web
        </p>
      </div>
      <div className="Tecnologias">
        <img src={Html}></img>
        <img src={CSS}></img>
        <img src={JS}></img>
        <p>
          Estas son las tecnologías básicas que se <br />
          tengo los Concomientos básicos para realizar <br />
          un sitio web básico
        </p>
      </div>
      <nav>
        <input
          type="button"
          value="WebPack"
          onClick={myWebpack}
          data-testid="WebPack"
        />
        <input type="button" value="Babel" onClick={myBabel} data-testid="Babel"/>
        <input type="button" value="React" onClick={myReact} data-testid="React" />
        <input type="button" value="EsLint" onClick={myEsLint} data-testid="Linting"/>
        <input type="button" value="Jest" onClick={myJest} data-testid="Jest"/>
      </nav>
      <div className="D-Webpack" id="D-Webpack" data-testid="D-Webpack">
        <div className="Webpack-L">
          <h1>WebPack</h1>
          <img src={Webpack} className="App-logo" alt="logo" />
        </div>
        <div className="Webpack-R">
          <p>
            El uso de WebPack sirve para unir todos los archivos js, css, y html
            de un programa. <br />
            Compila todo el código en un solo lugar, haciendo que sea mucho más
            fácil de navegar y en general <br />y que no se necesiten tanto
            código.
          </p>
        </div>
      </div>
      <div className="D-Babel" id="D-Babel" data-testid="D-Babel">
        <div className="Babel-L">
          <p>
            Babel es una herramienta que ayuda a convertir códgio de Javascript
            a código más reciente, para uso de navegador
          </p>
        </div>
        <div className="Babel-R">
          <h1>Babel</h1>
          <img src={babel} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="D-React" id="D-React"data-testid="D-React">
        <div className="React-L">
          <h1>React</h1>
          <img src={react} className="App-logo" alt="logo" />
        </div>
        <div className="React-R">
          <p>
            El uso de React sirve principalmente para el diseño de interfaces y
            la UI (¡Como esta!)
            <br />
          </p>
        </div>
      </div>
      <div className="D-Linting" id="D-Linting" data-testid="D-Linting">
        <div className="Linter-L">
          <p>
            Linting es una manera para poder enforzar código. EsLint Es una
            manera para poder aplicar estar reglas <br />
            Con EsLint, se puede enforzar el estilo Airbnb
          </p>
        </div>
        <div className="Linter-R">
          <h1>Eslint</h1>
          <img src={eslint} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="D-Jest" id="D-Jest" data-testid="D-Jest">
        <div className="Jest-L">
          <h1>Jest</h1>
          <img src={jest} className="App-logo" alt="logo" />
        </div>
        <div className="Jest-R">
          <p>
            Concomientos de Jest y de Testing, donde yo puedo tratar de crear
            pruebas, mostrar que puedo <br />
            verificar que todo funciona como debería, y de esa manera, mostrar
            <br />
            la calidad de código y debuggear en caso que sea necesario.
          </p>
        </div>
      </div>
      <h1>Ejemplos de proyecto realizados</h1>
      <div className="Final">
        <div className="Ejemplos">
          <p>
            ¿Queres jugar un juego de memoria? <br />
            Con todas las herramientas explicadas anteriormente <br />
            juega este juego y mira cual es tu puntaje más alto!
          </p>
          <Link to="React">
            <button type="button">Memoria</button>
          </Link>
        </div>
        <div className="Ejemplos">
          <p>
            ¿Necesitas una calculadora para matemáticas? <br />
            Con todas las herramientas explicadas anteriormente <br />
            Se realizo esta calculadora sencilla para uso!
          </p>
          <Link to="Calculator">
            <button type="button">Calculator</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
