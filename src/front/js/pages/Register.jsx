import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo_taller from "../../img/Logo_taller2.jpg";
import "../../styles/index.css";

export const Register = () => {
  let initialState = {
    email: "",
    password: "",
  };
  const { store, actions } = useContext(Context);
  const [userRegister, setUserRegister] = useState(initialState);

  const handleChange = ({ target }) => {
    setUserRegister({
      ...userRegister,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userRegister.email.trim() != "" && userRegister.password.trim() != "") {
      let response = await actions.userRegister(userRegister);
      if (response) {
        setUserRegister({ initialState });
        alert("Se ha resgitrado con exito");
      } else {
        alert("algo salio mal, intetalo de nuevo");
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <>
      {/* <div className="container-fluid">
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
              <Link className="nav-link active" aria-current="page" to="/">
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
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="container">
        <div className="row col-8 justify-content-center">
          <h1 className="text-center">Registrarse</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
                name="email"
                value={userRegister.email}
              />
              
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                name="password"
                value={userRegister.password}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                name="name"
                value={userRegister.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Numero
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                name="numero"
                value={userRegister.numero}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
