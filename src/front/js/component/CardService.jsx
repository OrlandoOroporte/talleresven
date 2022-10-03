import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




const CardService = ({ service }) => {
  const { store } = useContext(Context);

  const { name, descripcion, precio, image, id, taller_id} = service

  let item = taller_id


  console.log(image)
  return (
    <>

      <Link className="card" to={`/services/${id}`}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">{precio}</p>
          <p className="card-text" key={item.taller_id} > {store.taller.map((item) => {
            return (
              <span>{item.razon_social}</span>
            )
          })}</p>
        </div>
      </Link>

    </>
  )

};

// CardService.prototype={
//     item: PropTypes.object,
// }
export default CardService