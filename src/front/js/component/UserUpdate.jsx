import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const UserUpdate = ({ modalId, initial }) => {

    // const { name, email, number } = initial

    let initialState = {
        name: "",
        number: "",
        avatar: "",
        user_id: modalId
    }

    const [userUpdate, setUserUpdate] = useState(initialState)

    const handleChange = (event) => {
        setUserUpdate({
            ...userUpdate,
            [event.target.name]: event.target.value
        })
    }

    const handelImage = (event) => {
        setUserUpdate({
            ...userUpdate,
            avatar: event.target.files[0]
        })
    }

    const { actions } = useContext(Context)

    const handleSubmit = async (event) => {
        const formData = new FormData()
        formData.append("name", userUpdate.name)
        formData.append("numero", userUpdate.number)
        formData.append("avatar", userUpdate.avatar)

        if (userUpdate.name.trim() != "") {

            let response = await actions.updateUser(formData)
            if (response) {
                setUserUpdate(initialState);
                Swal.fire(
                    '¡Bien Hecho!',
                    '¡Se ha modificado el usuario con exito!',
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
                    text: '¡Ocurrio un error al modificar el usuario!',
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡El campo nombre no puede estar vacio!',
            })
        }
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModalUU${modalId}`}
                data-bs-whatever="@getbootstrap"
            >
                Modificar
            </button>
            <div
                className="modal fade"
                id={`exampleModalUU${modalId}`}
                tabIndex="-1"
                aria-labelledby="exampleModalUULabel"
                aria-hidden="true"
            >

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalUULabel">
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
                                        value={userUpdate.name}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Número:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        name="number"
                                        value={userUpdate.number}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Avatar:
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handelImage}
                                        name="avatar"
                                    // value={userUpdate.avatar}
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

export default UserUpdate;
