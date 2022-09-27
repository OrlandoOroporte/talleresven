import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { TallerRegister } from "../component/TallerRegister.jsx"
import ServiceRegister from "../component/ServiceRegister.jsx";

export const Worksheet = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    actions.getUserToke();
  }, []);
  //   let rol = "XXXX"

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Perfil
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Servicios
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Citas
          </button>
          <button
            className="nav-link"
            id="nav-disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-disabled"
            type="button"
            role="tab"
            aria-controls="nav-disabled"
            aria-selected="false"
            disabled
          >
            Disabled
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <div className="card-body">
            <h5 className="card-title">{store.user?.name}</h5>
            <p className="card-text">{store.user?.email}</p>
            <p className="card-text">{store.user?.numero}</p>
            <br></br>
            {/* {store.user?.taller_id?.length > 0 && <h3>Tus talleres</h3>} */}
            {store.user?.taller_id?.length > 0 ? store.user.taller_id.map((taller, index) => (
              <div key={taller.id}>
                <h3>Taller: {index + 1}</h3>
                <p className="card-text">{taller.razon_social}</p>
                <p className="card-text">{taller.rif}</p>
                <p className="card-text">{taller.direccion}</p>
                <p className="card-text">ID del taller: {taller.id}</p>
                <br></br>
                {/* {taller.servicio_id?.length > 0 && <h3>Tus servicios</h3>} */}
                {taller.servicio_id?.length > 0 ? taller.servicio_id.map((service, index) => (
                  <div key={service.id}>
                    <h4>Servicio: {index + 1}</h4>
                    <img src={service.image} className="card-img-top" alt="..." />
                    <p className="card-text"> Nombre: {service.name}</p>
                    <p className="card-text"> Descripcion: {service.descripcion}</p>
                    <p className="card-text">Precio: {service.precio}</p>
                    <p className="card-text">Taller: {service.taller_id}</p>
                    <br />
                  </div>
                )) : <h4>Usted no tiene servicios registrado</h4>}
              </div>
            )) : <h4>Usted no posee talleres registrado</h4>}
            <br />
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              Agregar taller
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <TallerRegister />

            </div>
            <button
              type="button"
              className="btn btn-success mx-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              data-bs-whatever="@getbootstrap"
            >
              Agregar servicio
            </button>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <ServiceRegister />

            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <div className="card-father">
            <div className="card">
              <img
                src="https://media.istockphoto.com/photos/car-repairair-conditioner-picture-id495341914?k=20&m=495341914&s=612x612&w=0&h=VIAFCTsf4xKzI7naa4Tdi1E4aFJgPos7LxKSt1GQfy4="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Revision aire acondicionado</h5>
                <p className="card-text">
                  Revision de los 5 puntos de sistema aire acondicionado.{" "}
                </p>
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://cdn.autoproyecto.com/wp-content/uploads/2017/12/top_10_autos_decepcion_2017_main.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cambio aceite carro pequeño</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>4 litros aceite</li>
                  <li>Filtro aceite/aire</li>
                  <li>Revision de fluidos</li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://conduciendo.com/wp-content/uploads/2017/10/Camionetas2013Colombia-18102013-01.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cambio aceite carro grande</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>8 litros aceite</li>
                  <li>Filtro aceite/aire</li>
                  <li>Revision de fluidos</li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://articulos.elclasificado.com/wp-content/uploads/2022/02/Mecanico-revisando-el-motor-de-un-carro-696x363.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Servicio de entonacion</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>Limpieza de inyectores</li>
                  <li>Cambio Bujias</li>
                  <li>Mantenimiento Bomba de gasolina</li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
          </div>
          <div className="card-father">
            <div className="card">
              <img
                src="https://images.milenio.com/YieC_jyKKOIsSUpbtTKviu4RnSQ=/936x566/uploads/media/2020/11/19/loops-app-lavado-autos-domicilio.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lavado Automotriz</h5>
                <p className="card-text">
                  Lavado de carroceria y aspirado de interiores{" "}
                </p>
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://www.maddoxdetail.com/wp-content/uploads/2021/10/limpiar-tapiceria-piel-cuero-coche-maddox-detailing-car-productos-aurgi-norauto-midas-amazon-2.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Limpieza de Tapiceria</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>Tapiceria de techo</li>
                  <li>Puertas </li>
                  <li>Piso </li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="http://www.goodyear-up.com/Content/uploads/Mantenimiento.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Servicio de Neumaticos</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>Revision</li>
                  <li>Rotacion</li>
                  <li>Alineacion y balanceo</li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://storage.googleapis.com/blog-prod-files/uploads/sites/11/2022/02/sistema-de-frenos-680x350.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Revision y cambio de frenos</h5>
                {/* <p className="card-text"> */}
                <ul>
                  <li>Cambios de pastillas o bandas</li>
                  <li>Rectificacion de disco</li>
                  <li>Revision de fluidos</li>
                </ul>
                {/* </p> */}
                <a href="#" className="card-link">
                  Añadir a mis servicios
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabIndex="0"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabIndex="0"
        >
          ...
        </div>
      </div>
    </>
  );
};
