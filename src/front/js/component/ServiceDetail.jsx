import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';


const ServiceDetail = () => {

    const { store, actions } = useContext(Context)
    const [service, setService] = useState({})

    let params = useParams();
    console.log(params)

    const findService = () => {
        const service = store.service.find((item) => {
            return (
                item.id == params.id

            )
        })
        if (service){
            setService(service)
        }

    }


    useEffect(()=>{
        findService()
    },[])
    return (
        <>

            <div className="card">
                <img src={service?.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service?.name}</h5>
                    <p className="card-text">{service?.descripcion}</p>
                    <p className="card-text">{service?.precio}</p>
                    <button type="button" className="btn btn-link" onClick={()=>actions.setMyservice(service?.id)}>Link</button>
                    
                </div>
            </div>

        </>
    )
}

export default ServiceDetail;