import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


const TallerUpdate = ({ modalId, initial }) => {

    const { razon_social, rif, direccion } = initial

    let initialState = {
        razon_social: razon_social,
        rif: rif,
        direccion: direccion,
        logo: "",
        taller_id: modalId
    }
    const [tallerUpdate, setTallerUpdate] = useState(initialState)

    const handleChange = (event) => {
        setTallerUpdate({
            ...tallerUpdate,
            [event.target.name]: event.target.value
        })
    }

    const { actions, store } = useContext(Context)

    const handleSubmit = async (event) => {

        if (tallerUpdate.razon_social.trim() != "") {
            console.log("debo guardar el servicio")
            let response = await actions.updateTaller(tallerUpdate)
            if (response) {
                setTallerUpdate(initialState);
                Swal.fire(
                    '¡Bien Hecho!',
                    '¡Se ha modificado el servicio con exito!',
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        actions.getTaller();
                    }

                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Ocurrio un error al modificar el servicio!',
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡El campo razon social no puede estar vacia!',
            })
        }
    }


    return (
        <>
            <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${modalId}`}
                data-bs-whatever="@getbootstrap"
            >
                Modificar
            </button>
            <div
                className="modal fade"
                id={`exampleModal${modalId}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Complete los campos para actualizar
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
                                        onChange={handleChange}
                                        name="razon_social"
                                        value={tallerUpdate.razon_social}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        RIF:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="rif"
                                        value={tallerUpdate.rif}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Ubicación:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="direccion"
                                        value={tallerUpdate.direccion}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Logo:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="logo"
                                        value={tallerUpdate.logo}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => handleSubmit()}>
                                Modificar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TallerUpdate;