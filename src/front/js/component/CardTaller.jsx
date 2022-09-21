import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";


const CardTaller = (props) => {
  return (
    <>
      <div className="card">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{props.razon_social}</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{props.rif}</h5>
            </div>
            <p class="mb-1">{props.direccion}</p>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{props.servico}</h5>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardTaller;
