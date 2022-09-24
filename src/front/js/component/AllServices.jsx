import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardService from "./CardService.jsx";


const AllService = (props) => {
    const { store } = useContext(Context);
    let service= store.service


    return (
        <>
        <div className="card-father"> 
        {service.map((service,index)=>{
            return(
                <CardService key={service.id} image={service.image} name={service.name} descripcion={service.descripcion} precio={service.precio}/>
            )
        })}
        </div>
        </>
    )
}

export default AllService
