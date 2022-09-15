import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo_taller from "../../img/Logo_taller2.jpg";

export const Worksheet = () => {
  const { store, actions } = useContext(Context);
//   let rol = "XXXX"
 
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
        <button className="btn btn-primary" type="button">Salir</button>
        </nav>
        </div>
        {/* {rol==="taller"?
        
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Perfil</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Servicios</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Citas</button>
          <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
        </div>
      </nav>
      : 
      <h1>cliente</h1>
    } */}
        <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Perfil</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Servicios</button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Citas</button>
    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
  <div className="card-body">
    <h5 className="card-title">Taller fulanito</h5>
    <p className="card-text">J22222333</p>
    <p className="card-text">AV. principal ...</p>
    <p className="card-text">Fulanito detal</p>
    <a href="#" className="btn btn-primary">Modificar Perfil</a>
  </div>
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
    ....
  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">...</div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">...</div>
</div>

    </>
  )

}