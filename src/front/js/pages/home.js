import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container margin ms-0 ">
        <div className="row col-12 ">
          <div className="d-flex ">
            <div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://http2.mlstatic.com/D_NQ_NP_761668-MLV50305151478_062022-C.jpg "
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.leioamotor.es/uploads/cms/con_contenido/plataforma_2/01/28/88/images/carga%20de%20aire%20acondicionado.jpg"
                    alt="..."
                    className="d-block "
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://serviciosautomotrices.mx/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-14-at-5.58.56-PM-e1586906593786.jpeg"
                    className="d-block "
                    alt="..."
                  />
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="card border border-0">
              <div className="card-body">
                <h4>Publica con nosotros:</h4>
                <p text-primary><i className="fa fa-twitter"></i>   @talleresvenapp</p>
                <p><i className="fa-solid fa-envelope"></i> talleresvenapp@gmail.com</p>
                <p><i className="fa fa-facebook"></i>  TalleresVenApp</p>
                <p><i className="fa-brands fa-instagram"></i> @talleresvenapp</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
