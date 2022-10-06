import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

const ServiceUpdate = ({ modalId, initial }) => {

    const { name, descripcion, precio } = initial

    let initialState = {
        name: name,
        price: precio,
        descripcion: descripcion,
        image: "",
        service_id: modalId
    }
    const [serviceUpdate, setServiceUpdate] = useState(initialState)

    const handleChange = (event) => {
        setServiceUpdate({
            ...serviceUpdate,
            [event.target.name]: event.target.value
        })
    }

    const { actions, store } = useContext(Context)

    const handleSubmit = async (event) => {

        if (serviceUpdate.name.trim() != "") {
            console.log("debo guardar el servicio")
            let response = await actions.updateService(serviceUpdate)
            if (response) {
                //setServiceUpdate(initialState);
                Swal.fire(
                    '¡Bien Hecho!',
                    '¡Se ha modificado el servicio con exito!',
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        actions.getService();
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
                text: '¡El campo Nombre es necesario!',
            })
        }
    }

    // useEffect(() => {
    //     actions.getService();
    //     actions.getTaller();
    // }, [serviceUpdate]);

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
                                        Nombre:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="name"
                                        value={serviceUpdate.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Descripción:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="descripcion"
                                        value={serviceUpdate.descripcion}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Precio:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="price"
                                        value={serviceUpdate.price}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Imagen:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="image"
                                        value={serviceUpdate.image}
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
    )

}

export default ServiceUpdate;