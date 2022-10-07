import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const ServiceRegister = () => {

    let navigate = useNavigate()

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
    const handelImage = (event) => {
        setServiceRegister({
            ...serviceRegister,
            image: event.target.files[0]
        })
    }





    const { actions, store } = useContext(Context)
    const { taller_id } = store.user
   


    const handleSubmit = async (event) => {
        const formData = new FormData()
        formData.append("name", serviceRegister.name)
        formData.append("price", serviceRegister.price)
        formData.append("descripcion", serviceRegister.descripcion)
        formData.append("image", serviceRegister.image)

        if (serviceRegister.name.trim() != "" && serviceRegister.price.trim() != "" && serviceRegister.taller_id.trim() != "") {
            
            let response = await actions.registerService(formData)
            if (response) {
                setServiceRegister({ initialState });
                Swal.fire(
                    '¡Bien Hecho!',
                    '¡Se ha creado el servicio con exito!',
                    'success'
                )
                actions.getService();
                navigate("/worksheet");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Ocurrio un error al crear el servicio!',
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Todos los campos son necesarios!',
            })
        }
    }


    return (
        <>
            <button
                type="button"
                className="btn btn-success mx-3"
                data-bs-toggle="modal"
                data-bs-target="#Modal2"
                data-bs-whatever="@getbootstrap"
            >
                Agregar servicio
            </button>
            <div
                className="modal fade"
                id="Modal2"
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
                                        type="file"
                                        className="form-control"
                                        onChange={handelImage}
                                        name="image"
                                    // value={serviceRegister.image}
                                    />
                                </div>
                                <label htmlFor="recipient-name" className="col-form-label">
                                    Taller:
                                </label>
                                <select className="form-select " aria-label="Default select example" onChange={handleChange} name="taller_id">
                                    <option value="" >Seleccione un Taller</option>
                                    {taller_id?.map((item) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.razon_social}</option>
                                        )
                                    })}

                                </select>
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => handleSubmit()}>
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}

export default ServiceRegister;