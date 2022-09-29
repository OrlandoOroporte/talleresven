import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import "../../styles/index.css";



const CardService = ({ service }) => {

  const { name, descripcion, precio, image, id } = service
  console.log(image)
  return (
    <>

      <Link className="card" to={`/services/${id}`}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">{precio}</p>
          <a href="#" className="card-link">Talleres</a>
        </div>
      </Link>

    </>
  )

};

// CardService.prototype={
//     item: PropTypes.object,
// }
export default CardService