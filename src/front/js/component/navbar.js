import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_taller from "../../img/Logo_taller2.jpg";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate()

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
            <Link className="nav-link active" aria-current="page" to="/taller">
              Talleres
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Servicios
            </Link>
          </li>
		  <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/register">Registro</Link></li>
            {store.token == "" &&  <li><Link className="dropdown-item" to="/login">Iniciar Sesión</Link></li>}
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        </ul>
        <button className="btn btn-primary" type="button"  onClick={() => {
              actions.logout();
              navigate("/");
            }}>
            Salir
          </button>
      </nav>
    </div>
    </>
  )
  
};
