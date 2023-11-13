import React from "react";
import "./App.css";
import seta from "./img/seta.svg";
import itera from "./img/itera.svg";
import setaDir from "./img/setaDir.svg";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="div">
      <Navbar />
      <div className="div-2">
        <div className="div-3">
          {/* <div className="div-4">
            <div className="div-5">LOGO GABI</div>
            <div className="div-6">
              <div className="div-7">
                <div className="div-8">trabalho</div>
                <div className="div-9" />
              </div>
              <div className="div-10">sobre mim</div>
              <div className="div-11">contato</div>
            </div> 
  </div>*/}
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
          <div className="div-24">
            <div className="div-25">
              <div className="column">
                <div className="div-26" />
              </div>
              <div className="column-3">
                <div className="div-27">
                  <div className="div-28">
                    <div className="div-29">ux research / product design</div>
                    <div className="div-30">
                      Itera - Tornando a rotina entre pais e filhos mais simples
                      e amorosa.
                    </div>
                  </div>
                  <div className="div-31">
                    <div className="div-32">Leia o estudo de caso</div>
                    <img
                      loading="lazy"
                      src={setaDir}
                      className="img-4"
                      alt="seta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-33">
            <div className="div-34">
              <div className="column">
                <div className="div-35" />
              </div>
              <div className="column-4">
                <div className="div-36">
                  <div className="div-37">
                    <div className="div-38">ux research / product design</div>
                    <div className="div-39">
                      Itera - Tornando a rotina entre pais e filhos mais simples
                      e amorosa.
                    </div>
                  </div>
                  <div className="div-40">
                    <div className="div-41">Leia o estudo de caso</div>
                    <img
                      loading="lazy"
                      src={setaDir}
                      className="img-5"
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
