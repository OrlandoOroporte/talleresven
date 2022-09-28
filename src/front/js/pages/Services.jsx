import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

// export const Services = () => {
//     const { store, actions } = useContext(Context);
//     return (
//         <>
//         <div className="container-fluid">
//       <nav className="navbar bg-light">
//         <Link className="navbar-brand" to="/">
//           <img
//             src={logo_taller}
//             alt="Logo"
//             width="50"
//             height="50"
//             className="d-inline-block align-text-top"
//           />
//           <h6>TalleresVenAPP</h6>
//         </Link>
//         <ul className="nav justify-content-end">
//           <li className="nav-item">
//             <Link className="nav-link active" aria-current="page" to="/worksheet">
//               Talleres
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/services">
//               Servicios
//             </Link>
//           </li>
// 		  <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Usuarios
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/register">Registro</Link></li>
//             <li><Link className="dropdown-item" to="/login">Iniciar Sesión</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/">Something else here</Link></li>
//           </ul>
//         </li>
//         </ul>
//       </nav>
//     </div>

    {/* <div className="card-father"> */}
          {/* <div className="card">
            <img src="https://media.istockphoto.com/photos/car-repairair-conditioner-picture-id495341914?k=20&m=495341914&s=612x612&w=0&h=VIAFCTsf4xKzI7naa4Tdi1E4aFJgPos7LxKSt1GQfy4=" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Revision aire acondicionado</h5>
              <p className="card-text">Revision de los 5 puntos de sistema aire acondicionado. </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.autoproyecto.com/wp-content/uploads/2017/12/top_10_autos_decepcion_2017_main.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Cambio aceite carro pequeño</h5>
              <p className="card-text">
                <ul>
                  <li>4 litros aceite</li>
                  <li>Filtro  aceite/aire</li>
                  <li>Revision de fluidos</li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="https://conduciendo.com/wp-content/uploads/2017/10/Camionetas2013Colombia-18102013-01.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Cambio aceite carro grande</h5>
              <p className="card-text">
                <ul>
                  <li>8 litros aceite</li>
                  <li>Filtro  aceite/aire</li>
                  <li>Revision de fluidos</li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="https://articulos.elclasificado.com/wp-content/uploads/2022/02/Mecanico-revisando-el-motor-de-un-carro-696x363.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Servicio de entonacion</h5>
              <p className="card-text">
                <ul>
                  <li>Limpieza de inyectores</li>
                  <li>Cambio Bujias</li>
                  <li>Mantenimiento Bomba de gasolina</li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          </div>
          <div className="card-father">
          <div className="card">
            <img src="https://images.milenio.com/YieC_jyKKOIsSUpbtTKviu4RnSQ=/936x566/uploads/media/2020/11/19/loops-app-lavado-autos-domicilio.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Lavado Automotriz</h5>
              <p className="card-text">Lavado de carroceria y  aspirado de interiores  </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.maddoxdetail.com/wp-content/uploads/2021/10/limpiar-tapiceria-piel-cuero-coche-maddox-detailing-car-productos-aurgi-norauto-midas-amazon-2.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Limpieza de Tapiceria</h5>
              <p className="card-text">
                <ul>
                  <li>Tapiceria de techo</li>
                  <li>Puertas </li>
                  <li>Piso </li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="http://www.goodyear-up.com/Content/uploads/Mantenimiento.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Servicio de Neumaticos</h5>
              <p className="card-text">
                <ul>
                  <li>Revision</li>
                  <li>Rotacion</li>
                  <li>Alineacion y balanceo</li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div>
          <div className="card">
            <img src="https://storage.googleapis.com/blog-prod-files/uploads/sites/11/2022/02/sistema-de-frenos-680x350.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Revision y cambio de frenos</h5>
              <p className="card-text">
                <ul>
                  <li>Cambios de pastillas o bandas</li>
                  <li>Rectificacion de disco</li>
                  <li>Revision de fluidos</li>
                </ul>
              </p>
                <a href="#" className="card-link">Añadir a mis servicios</a>
            </div>
          </div> */}
          {/* </div> */}
//         </>

//     )
// }
