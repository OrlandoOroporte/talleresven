import React, {useContext} from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const CardService = (props) => {
    return (
        <>
        <div className="card">
            <img src={`${props.item.image}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.item.name}</h5>
              <p className="card-text">{props.item.descripcion}</p>
                <a href="#" className="card-link">Talleres</a>
            </div>
          </div>
        </>
    )

};

CardService.prototype={
    item: PropTypes.object,
}
export default CardService