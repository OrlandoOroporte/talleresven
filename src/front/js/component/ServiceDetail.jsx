import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {

    const { store } = useContext(Context)

    let params = useParams();
    console.log(params)

    const service = store.service.find((item, index) => {
        return (
            index == params.id
        )
    })
    console.log(service)

    // const { name, descripcion, precio, image, id } = service

    return (
        <>

            <div className="card">
                {/* <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="card-link">Talleres</a>
                </div> */}
            </div>

        </>
    )
}

export default ServiceDetail;