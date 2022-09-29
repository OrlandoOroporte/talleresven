import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";


const CardTaller = (props) => {
  return (
    <>
      <div className="card">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.razon_social}</h5>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.rif}</h5>
            </div>
            <p className="mb-1">{props.direccion}</p>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.servico}</h5>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardTaller;
