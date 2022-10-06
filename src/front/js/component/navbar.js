import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_taller from "../../img/Logo_tallervenapp.png";
import { Context } from "../store/appContext";
import Presupuesto from "./Presupuesto.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  let myservice = store.myservice;
  console.log(myservice)

  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar bg-light">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src={logo_taller}
                alt="Logo"
                className="d-inline-block align-text-top  logo"
              />
            </Link>
            <div
              className="name-logo p-0"
              onClick={() => {
                navigate("/");
              }}
            >
              <h5>
                <Link className="nav-link p-0" to="/">
                  TalleresVenAPP
                </Link>
              </h5>
              <h6 className="fst-italic fw-bold">
                Lo que tu vehículo necesita
              </h6>
            </div>
          </div>
          <ul className="nav justify-content-end m-4">
            <li className="nav-item fw-bold">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/taller"
              >
                Talleres
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link className="nav-link" to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item dropdown fw-bold">
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
            <li className="nav-item fw-bold">
              <Link
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                to=""
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>

              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Servicios Seleccionados
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  04/10/2022
                  {myservice.map((myservice, index) => {
                    return (
                      <Presupuesto key={`${myservice.id}${index}`} myservice={myservice} />
                    );
                  })}
                  <div className="card-footer">Total 270 USD</div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
