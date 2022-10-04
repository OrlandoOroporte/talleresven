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

      <div className="card" to={`/services/${id}`}>
        <div className="list-group ">
          <h4 className="card-title carservicer">{name}</h4>
          <div>
          {image != "" ? <img src={image} className="card-img-top" alt="..." />
                    : <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f464.png" className="card-img-top" alt="..." />}
          </div>
          <p className="card-text carservicer">{descripcion}</p>
          <p className="card-text carservicer">{precio}</p>
          <p className="card-text carservicer" >{taller?.razon_social}</p>
        </div>
      </div>
    </>
  )

};

// CardService.prototype={
//     item: PropTypes.object,
// }
export default CardService