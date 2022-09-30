import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Login = () => {
  let initialState = {
    email: "",
    password: "",
  };

  let navigate = useNavigate();

  const { store, actions } = useContext(Context);
  const [userLogin, setUserLogin] = useState(initialState);
  const handleChange = ({ target }) => {
    setUserLogin({
      ...userLogin,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userLogin.email.trim() != "" && userLogin.password.trim() != "") {
      let response = await actions.login(userLogin);
      if (response) {
        navigate("/worksheet");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal, intentalo de nuevo!',
          
        })
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son necesarios',
        icon: 'error',
        confirmButtonText: 'Intentalo de nuevo'
      })
    }
  };

  return (
    <>
      <div className="container">
      <div className="d-flex">
        <div className="row col-8 justify-content-center pt-4">
        <h1 className="text-center">Inicia Sesión  </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email 
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
                value={userLogin.email}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                name="password"
                value={userLogin.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar 
            </button>
          </form>
        </div>
        <div className="ps-4 pt-4">
      <img
              src="https://cdn2.hubspot.net/hubfs/500845/Im%C3%A1genes_Post/Octubre%202017/servicios-extra-taller.jpg"
              className="img-register"
              alt="..."
            />
        </div>
        </div>
      </div>
    </>
  );
};
