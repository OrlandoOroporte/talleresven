import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Register = () => {
  let initialState = {
    email: "",
    password: "",
  };
  let navigate = useNavigate();
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
        navigate("/login")
      } else {
        alert("algo salio mal, intetalo de nuevo");
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <>

      <div className="container">
      <div className="d-flex">
        <div className="row col-8 justify-content-center pt-4 ">
          <h1 className="text-center">Registrarse</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={handleChange}
                name="email"
                value={userRegister.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control"
                onChange={handleChange}
                name="password"
                value={userRegister.password}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="name"
                value={userRegister.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Numero Telefonico:
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
            <button type="submit" className="btn btn-primary">
              Registrase ahora 
            </button>
          </form>
        </div>
        <div className="ps-4 pt-5">
      <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFn9yxtJNcGHpbwXZf0EPw8o0FeTzLpgNZg&usqp=CAU"
              className="img-register"
              alt="..."
            />
        </div>
        </div>
      </div>
    
    </>
  );
};
