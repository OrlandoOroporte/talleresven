import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo_taller from "../../img/Logo_taller2.jpg";
import oferta3 from "../../img/oferta3.jpg";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <div className="container-fluid">
      <nav className="navbar bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={logo_taller}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          <h6>TalleresVenAPP</h6>
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/worksheet">
              Talleres
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Servicios
            </Link>
          </li>
		  <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/register">Registro</Link></li>
            <li><Link class="dropdown-item" to="/login">Iniciar Sesión</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        </ul>
      </nav>
    </div>
    <div className="container-fluid">
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
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.leioamotor.es/uploads/cms/con_contenido/plataforma_2/01/28/88/images/carga%20de%20aire%20acondicionado.jpg"
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
    </div>
    </>

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
