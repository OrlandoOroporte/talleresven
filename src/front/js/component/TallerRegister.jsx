import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const TallerRegister = () => {
  let initialState = {
    razon_social: "",
    rif: "",
    direccion: "",
    logo: ""
  }

  const [tallerRegister, setTallerRegister] = useState(initialState)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setTallerRegister({
      ...tallerRegister,
      [event.target.name]: event.target.value

    })
  }
  const handleFuntions = () => {
    handleSubmit();



  }
  const handleHook = () => {
    setTallerRegister(initialState);

  }
  const { actions } = useContext(Context)

  const handleSubmit = async (event) => {
    console.log("me ejecuto")
    // event.preventDefault();
    if (tallerRegister.razon_social != "" && tallerRegister.rif != "" && tallerRegister.direccion != "") {
      let response = await actions.userRegisterTaller(tallerRegister)
      if (response) {
        Swal.fire(
          '¡Bien Hecho!',
          '¡Se ha creado el servicio con exito!',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            setTallerRegister(initialState)
            actions.getTaller()
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Ocurrio un error al crear el taller!',
        })
      }
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Todos los campos son necesarios!',
      })
    }
  };

  return (

    <>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        onClick={handleShow}
      >
        Agregar taller
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Complete los campos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Razon Social:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="razon_social"
                    value={tallerRegister.razon_social}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Rif:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="rif"
                    value={tallerRegister.rif}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Direccion:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="direccion"
                    value={tallerRegister.direccion}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Logo:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="logo"
                    value={tallerRegister.logo}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => handleHook()}
              >
                Salir
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                onClick={() => handleFuntions()}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
