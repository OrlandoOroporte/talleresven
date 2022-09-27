import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const ServiceRegister = () => {

    let initialState = {
        name: "",
        price: "",
        descripcion: "",
        image: "",
        taller_id: ""
    }

    const [serviceRegister, setServiceRegister] = useState(initialState)

    const handleChange = (event) => {
        setServiceRegister({
            ...serviceRegister,
            [event.target.name]: event.target.value
        })
    }

    const { actions } = useContext(Context)

    const handleSubmit = async (event) => {
        //event.preventDefault();
        if (serviceRegister.name.trim() != "" && serviceRegister.price.trim() != "" && serviceRegister.taller_id.trim() != "") {
            console.log("debo guardar el servicio")
            let response = await actions.registerService(serviceRegister)
            if (response) {
                setServiceRegister({ initialState });
                alert("Se ha registrado el servicio con exito")
            } else {
                alert("Ocurrio un error al crear el servicio")
            }
        } else {
            alert("Todos los campos son requeridos mi pana")
        }
    }

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
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    name="name"
                                    value={serviceRegister.name}
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
                                    value={serviceRegister.descripcion}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">
                                    Precio:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    name="price"
                                    value={serviceRegister.price}
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
                                    value={serviceRegister.image}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">
                                    Taller:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    name="taller_id"
                                    value={serviceRegister.taller_id}
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
    )

}

export default ServiceRegister;