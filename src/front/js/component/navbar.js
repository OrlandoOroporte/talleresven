import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_taller from "../../img/Logo_tallervenapp.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-light">
          <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src={logo_taller}
              alt="Logo"
              className="d-inline-block align-text-top  logo"
            />
          
          </Link>
          <div clasName="name-logo" onClick={()=>{navigate("/")}} >
            <h5>TalleresVenAPP</h5>
            <h7>Lo que tu vehículo necesita</h7>
          </div>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/taller"
              >
                Talleres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuarios
              </Link>
              <ul className="dropdown-menu">
                {store.token == "" ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Registro
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Iniciar Sesión
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/worksheet">
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <div 
                        className="dropdown-item btn"
                        onClick={() => {
                          actions.logout();
                          navigate("/");
                        }}
                      >
                        Salir
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
