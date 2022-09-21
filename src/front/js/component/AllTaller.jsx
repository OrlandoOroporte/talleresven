import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardTaller from "./CardTaller.jsx";



const AllTaller = (props) => {

    const { store } = useContext(Context);
    let taller = store.taller
    // let  taller = [
    //     {
    //         razon_social:"Taller Fulanito C.A.",
    //         rif:"J-1234556",
    //         direccion:"Caller alamo av. terepaima ",
    //         servicio:"Servicio Aire Acondicionado"
    //     },
    
    // ]

    return (
        <>
        <div className="card-father"> 
        {taller.map((taller,index)=>{
            return(
                <CardTaller razon_social={taller.razon_social} rif={taller.rif} direccion={taller.direccion} servicio={taller.servicio}/>
            )   
        })}
        </div>
        </>
    )
}

export default AllTaller 
