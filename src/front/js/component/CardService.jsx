import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




const CardService = ({ service }) => {
  const { store } = useContext(Context);
  const [taller, setTaller] = useState({})

  const { name, descripcion, precio, image, id, taller_id} = service

  const findTallerService = () =>{
    let newTaller = store.taller.find((item)=>(item.id == taller_id)
    )
    setTaller(newTaller)

  }
useEffect(()=>{findTallerService()},[])

  console.log(taller_id)
  return (
    <>

      <Link className="card" to={`/services/${id}`}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">{precio}</p>
          <p className="card-text" >{taller?.razon_social}</p>
        </div>
      </Link>

    </>
  )

};

// CardService.prototype={
//     item: PropTypes.object,
// }
export default CardService