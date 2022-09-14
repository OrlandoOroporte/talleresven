import React, { useContext } from "react";
import { Context } from "../store/appContext";
import oferta1 from "../../img/oferta1.jpg";
import oferta2 from "../../img/oferta2.jpg";
import oferta3 from "../../img/oferta3.jpg";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div classNameName="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={oferta1}
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={oferta2}
              alt="..."
              className="d-block w-100 "
            />
          </div>
          <div className="carousel-item">
            <img src={oferta3}
            className="d-block w-100"
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

    // <div classNameName="text-center mt-5">
    // 	<h1>Hello Rigo!!</h1>
    // 	<p>
    // 		<img src={rigoImageUrl} />
    // 	</p>
    // 	<div classNameName="alert alert-info">
    // 		{store.message || "Loading message from the backend (make sure your python backend is running)..."}
    // 	</div>
    // 	<p>
    // 		This boilerplate comes with lots of documentation:{" "}
    // 		<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
    // 			Read documentation
    // 		</a>
    // 	</p>
    // </div>
  );
};
