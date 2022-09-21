import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardService from "./CardService.jsx";



const AllService = (props) => {

    const { store } = useContext(Context);
    let  service = [
        {
            image: "https://media.istockphoto.com/photos/car-repairair-conditioner-picture-id495341914?k=20&m=495341914&s=612x612&w=0&h=VIAFCTsf4xKzI7naa4Tdi1E4aFJgPos7LxKSt1GQfy4=",
            name:"Talleres Fulanito",
            descripcion:"Servicio Aire Acondicionado",
            precio:"50 USD"
        }
    ]

    return (
        <>
        {service.map((service,index)=>{
            return(
                <CardService image={service.image} name={service.name} descripcion={service.descripcion} precio={service.precio}/>
            )
        })}
        </>
    )
}

export default AllService
