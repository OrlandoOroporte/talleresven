import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container margin ms-0 ">
        <div className="row col-12 ">
          <div className="d-flex ">
            <div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.onbizz.com/images/espacio/arte/cca5d01799c63f44f772865776ce677d.jpg "
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://http2.mlstatic.com/D_NQ_NP_726088-MLV50574443469_072022-C.jpg"
                    alt="..."
                    className="d-block "
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://pbs.twimg.com/media/FbgadWgXoAMrHSK?format=jpg&name=large"
                    className="d-block "
                    alt="..."
                  />
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="card border border-0">
              <div className="card-body">
                <h4>Publica con nosotros:</h4>
                <p className="text-primary"><i className="fa fa-twitter"></i>   @talleresvenapp</p>
                <p className="text-primary"><i className="fa-solid fa-envelope"></i> talleresvenapp@gmail.com</p>
                <p className="text-primary"><i className="fa fa-facebook"></i>  TalleresVenApp</p>
                <p className="text-primary"><i className="fa-brands fa-instagram"></i> @talleresvenapp</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
