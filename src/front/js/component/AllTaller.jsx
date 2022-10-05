import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardTaller from "./CardTaller.jsx";



const AllTaller = (props) => {

    const { store } = useContext(Context);
    let taller = store.taller
    return (
        <>
        <div className="contanier margin">
            <div className="row col-14"> 
        {taller.map((taller,index)=>{
            return(
                <CardTaller key={taller.id} razon_social={taller.razon_social} rif={taller.rif} direccion={taller.direccion} servicio={taller.servicio} logo={taller.logo}/>
            )   
        })}
        </div>
        </div>
        </>
    )
}

export default AllTaller 
