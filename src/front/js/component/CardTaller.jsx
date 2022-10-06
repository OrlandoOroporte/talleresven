import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";


const CardTaller = (props) => {
  return (
    <>
      <div className="card">
        <div className="list-group">
          {/* <a href="#" className="list-group-item list-group-item-action"> */}
            <div className="d-flex w-100 justify-content-between">
              <h4 className="m-3">{props.razon_social}</h4>
            </div>
            {/* <img src={props.logo} className="card-img-top" alt="..." /> */}
            {props.logo != "" ? <img src={props.logo} className="card-img-top" alt="..." />
                    : <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f464.png" className="card-img-top " alt="..." />}
            <div className="d-flex w-100 justify-content-between">
              <h5 className="m-3">{props.rif}</h5>
            </div>
            <p className="m-3">{props.direccion}</p>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="m-3">{props.servicio}</h5>
            </div>
          {/* </a> */}
        </div>
      </div>
    </>
  );
};

export default CardTaller;
