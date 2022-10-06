import React, { Component } from "react";

export const Footer = () => (
  <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre nosotros</h6>
            <p className="text-justify">
              Nuestra  aplicación web esta pensada y desarrollada para enlazar la
              oferta y demanda de servicios automotriz en la Republica
              Bolivariana de Venezuela. 
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links">
              <li>
                Latoneria y Pintura 
              </li>
			  <li>
                Sistema de Suspencion
              </li>
			  <li>
                Sistema de Frenos 
              </li>
			  <li>
                Sistema de Refrigesracion
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Autores</h6>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/OrlandoOroporte">Orlando Oroporte</a>
              </li>
              <li>
                <a href="https://github.com/margumedo">Maicol Argumendo </a>
              </li>
			  <li>
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
              </li>
             
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            {" "}
            <p className="copyright-text">
              Made with <i className="fa fa-heart text-danger" /> by //{" "}
              <a href="http://www.4geeksacademy.com">4Geeks Academy</a>{" "}
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
  // <footer className="footer mt-auto py-3 text-center">
  // 	<p>
  // 		Made with <i className="fa fa-heart text-danger" /> by{" "}
  // 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
  // 	</p>
  // </footer>
);
