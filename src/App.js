import React from "react";
import "./App.css";
import seta from "./img/seta.svg";
import itera from "./img/itera.svg";
import setaDir from "./img/setaDir.svg";
import Navbar from "./components/navbar/navbar";
import star1 from "./img/Group.svg";
import star2 from "./img/Group2.svg";
function App() {
  return (
    <div className="div">
      <Navbar />
      <div className="div-2">
        <div className="div-3">
          <div className="div-4">
            <img loading="lazy" src={star1} className="star" alt="estrelas" />
            <img loading="lazy" src={star2} className="star2" alt="estrelas" />
          </div>

          <div className="div-12">
            Olá, sou a Gabriela - Uma Designer de produto com foco em Design de
            Interação.
          </div>
          <div className="div-13">
            Minha missão é resolver os mais diversificados problemas criando
            produtos simples de entender e fáceis de usar.
          </div>
          <img loading="lazy" src={seta} className="img" alt="seta" />
        </div>
      </div>
      <div className="div-14">
        <div className="div-15">
          <div className="div-16">
            <div className="div-17">
              <div className="column">
                <img loading="lazy" src={itera} className="img-2" alt="itera" />
              </div>
              <div className="column-2">
                <div className="div-18">
                  <div className="div-19">
                    <div className="div-20">
                      ux research / product design freelancer
                    </div>
                    <div className="div-21">
                      Itera - Tornando a rotina entre pais e filhos mais simples
                      e amorosa.
                    </div>
                  </div>
                  <div className="div-22">
                    <div className="div-23">Leia o estudo de caso</div>
                    <img
                      loading="lazy"
                      src={setaDir}
                      className="img-3"
                      alt="seta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
