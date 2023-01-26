import React from "react";
import "./Nosotros.css";
import Navbar from "../Navbar";

export default function Nosotros() {
  return (
    <div className="conteinerPadre">
      <Navbar />
      <div className="team-description">
        <h2>Nosotros:</h2>
        <p style={{ padding: "4vw " }}>
          Somos unos jóvenes programadores con muchas ganas de aprender y un
          hambre insaciable por el conocimiento. Nos conocimos en HENRY, donde
          reforzamos nuestras habilidades de comunicación y nuestros
          conocimientos día a día. A pesar de ser 7 inicialmente y de que, poco
          a poco, luego de la primer semana, ya eramos solo 4, para luego ser 3,
          no decaímos y nos enfocamos en cumplir con lo que puedieramos para
          terminar la tarea asignada. Aplicamos una metodologia de trabajo con
          la modalidad SCRUM, donde tenemos reuniones diarias para ponernos al
          tanto con las tareas de cada uno y también, a nivel personal,
          pair-programming vía Discord cuando una tarea se siente compleja, o
          demasiado para uno sólo.
        </p>
      </div>
      <div className="container">
        <div class="card">
          <img
            src="https://avatars.githubusercontent.com/u/95520170?v=4"
            alt="Your Name"
            class="card-img-top"
          />
          <div class="card-body">
            <h3 class="card-title">Your Name</h3>
            <p class="card-text">
              A brief description about yourself A brief description about
              yourself Lorem ipsum dolor sit, assumenda quis placeat esse
              accusamus, deserunt pariatur temporibus repudiandae tempora
              cupiditate, a illum.
            </p>

            <div class="social-icons">
              <a href="https://github.com/FrancoNicolas1">
                <i class="icon-github fab fa-github"></i>
              </a>
              <a href="">
                <i class="icon-linkedin fab fa-linkedin fa-2x"></i>
              </a>
              <a>
                <i class="icon-instagram fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src="https://avatars.githubusercontent.com/u/103983463?v=4"
            alt="Your Name"
            class="card-img-top"
          />
          <div class="card-body">
            <h3 class="card-title">Yamila De Olivera </h3>
            <p class="card-text">
              Nacida en Misiones y traída de muy joven a la ciudad de Buenos
              Aires, terminé el secundario en la escuela secundaria E.E.M de
              Morón. Siempre me apasionaron las construcciones, por lo que en su
              momento, estuve indecisa entre Arquitectura e Ingeniería Civil,
              para decantarme por esta última. Tras un breve período de cursada,
              la pandemia atacó, y el encierro y la falta de contacto me hizo
              conocer el apasionante mundo de la programación. Decidí meterme de
              lleno y tras informarme
            </p>

            <div class="social-icons">
              <a href="https://github.com/yamilabelen98">
                <i class="icon-github fab fa-github"></i>
              </a>
              <a href="">
                <i class="icon-linkedin fab fa-linkedin fa-2x"></i>
              </a>
              <a>
                <i class="icon-instagram fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img
            src="https://avatars.githubusercontent.com/u/77626612?v=4"
            alt="Your Name"
            class="card-img-top"
          />
          <div class="card-body">
            <h3 class="card-title">Your Name</h3>
            <p class="card-text">
              A brief description about yourself A brief description about
              yourself Lorem ipsum dolor sit, assumenda quis placeat esse
              accusamus, deserunt pariatur temporibus repudiandae tempora
              cupiditate, a illum.
            </p>
            <div class="social-icons">
              <a href="https://github.com/Harurin5671">
                <i class="icon-github fab fa-github"></i>
              </a>
              <a href="">
                <i class="icon-linkedin fab fa-linkedin fa-2x"></i>
              </a>
              <a>
                <i class="icon-instagram fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
