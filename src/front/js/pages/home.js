import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
  
    <div className="container-fluid margin">
    <div className="row col-12 justify-content-center">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pbs.twimg.com/media/DwezUrmWsAI9bv8.jpg"
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
            <img src="http://serviciosautomotrices.mx/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-14-at-5.58.56-PM-e1586906593786.jpeg"
            className="d-block "
             alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};
