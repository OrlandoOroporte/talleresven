import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import "../../styles/index.css";



const CardService = (props) => {
    return (
        <>
        
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.descripcion}</p>
              <p className="card-text">{props.precio}</p>
                <a href="#" className="card-link">Talleres</a>
            </div>
          </div>
        
        </>
    )

};

// CardService.prototype={
//     item: PropTypes.object,
// }
export default CardService