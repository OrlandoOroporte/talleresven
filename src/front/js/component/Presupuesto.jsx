import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";



const Presupuesto = ({myservice}) => {
    const { store, actions } = useContext(Context);
    const [taller, setTaller] = useState({})
    const {name, precio, taller_id} = myservice

    const findTallerService = () =>{
    let newTaller = store.taller.find((item)=>(item.id == taller_id)
    )
    setTaller(newTaller)

  }

  useEffect(()=>{findTallerService()},[])

console.log(myservice, "desde el card")
    return(
        <>
        <div className="container">
        <div className="row">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{name} {taller?.razon_social} {precio}USD</li>

</ul>
</div>
</div>

        </>
    )
}

export default Presupuesto