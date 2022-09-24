import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const TallerRegister = () => {
    let initialState = {
        razon_social:"",
        rif:"",
        direccion:""
    } 
    const [tallerRegister,setTallerRegister]=useState(initialState)
    
    const handleChange = (event) =>{
        setTallerRegister({
            ...tallerRegister,
            [event.target.name]: event.target.value

        })
    }
    const {actions}=useContext(Context) 

    const handleSubmit = async (event) => {
      console.log("me ejecuto")
        // event.preventDefault();
        if (tallerRegister.razon_social != "" && tallerRegister.rif !="" && tallerRegister.direccion != ""){
            let response = await actions.userRegisterTaller(tallerRegister)
            if (response){
                setTallerRegister({initialState});
                alert("Taller registrado con exito")
            }else{
                alert("Algo salio mal")
            }
        }else {
            alert("Todos los campos son obligatorios")
        }
    };

  return (
    <>
     
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Salir
              </button>
              <button type="button" className="btn btn-primary"
              onClick={() => handleSubmit()}>
                Registrar
              </button>
            </div>
          </div>
        </div>
    </>
  );
};
