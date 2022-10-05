import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { TallerRegister } from "../component/TallerRegister.jsx"
import ServiceRegister from "../component/ServiceRegister.jsx";
import ServiceUpdate from "../component/ServiceUpdate.jsx";
import TallerUpdate from "../component/TallerUpdate.jsx"
import Swal from "sweetalert2";
import UserUpdate from "../component/UserUpdate.jsx";


export const Worksheet = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUserToke();
  }, [store.service, store.taller]);
  //   let rol = "XXXX"

  const handleDeleteService = async (service) => {

    Swal.fire({
      title: '¿Estás seguro de eliminarlo?',
      text: "Esta acción no es reversible...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await actions.deleteService(service)
        if (response) {
          Swal.fire(
            '¡Bien Hecho!',
            '¡Se ha eliminado el servicio con exito!',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              actions.getService();
            }

          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Ocurrio un error al modificar el servicio!',
          })
        }
      }
    })
  }

  const handleDeleteTaller = async (taller) => {

    Swal.fire({
      title: '¿Estás seguro de eliminarlo?',
      text: "Esta acción no es reversible...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await actions.deleteTaller(taller)
        if (response) {
          Swal.fire(
            '¡Bien Hecho!',
            '¡Se ha eliminado el servicio con exito!',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              actions.getTaller();
            }

          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Ocurrio un error al modificar el servicio!',
          })
        }
      }
    })
  }

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Perfil
          </button>
          <button
            className="nav-link"
            id="nav-services-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-services"
            type="button"
            role="tab"
            aria-controls="nav-services"
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
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >

          <div className="container">
            <div className="card-body">
              <img src={store.user?.avatar} className="card-img-top rounded-circle profile-img" alt="..." />
              <h5 className="card-title mx-5"> {store.user?.name}</h5>
              <p className="card-text"> <b>Email:</b> {store.user?.email}</p>
              <p className="card-text"><b>Teléfono: </b>{store.user?.numero}</p>
              <UserUpdate modalId={store.user.id} />
              <br></br>
              <p className="card-text"><b>Talleres:</b></p>
              {store.user?.taller_id?.length > 0 ? store.user.taller_id.map((taller, index) => (
                <div key={taller.id} className="my-5">
                  <h4 className="card-text mx-4">{taller.razon_social}</h4>
                  {taller.logo != "" ? <img src={taller.logo} className="card-img-top profile-img rounded-circle" alt="..." />
                    : <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f464.png" className="card-img-top" alt="..." />}
                  <p className="card-text"><b>RIF:</b>  {taller.rif}</p>
                  <p className="card-text"><b>Ubicación:</b> {taller.direccion}</p>
                  <TallerUpdate modalId={taller.id} initial={taller} />
                  <button type="button" className="btn btn-danger mx-3" onClick={() => handleDeleteTaller(taller.id)}>
                    Eliminar
                  </button>
                  <br />
                  <br />
                  <p className="card-text"><b>Servicios:</b></p>
                  <div className="container-fluid">
                    <div className="row">
                      {taller.servicio_id?.length > 0 ? taller.servicio_id.map((service, index) => (
                        <div key={service.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                          <h4 className="card-text">{service.name}</h4>
                          <img src={service.image} className="card-img-top w-100" alt="..." />
                          <p className="card-text"> <b>Descripción:</b> {service.descripcion}</p>
                          <p className="card-text"> <b>Precio:</b> {service.precio}</p>
                          <ServiceUpdate modalId={service.id} initial={service} />
                          <button type="button" className="btn btn-danger mx-3" onClick={() => handleDeleteService(service.id)}>
                            Eliminar
                          </button>
                          <br></br>
                          <br></br>
                        </div>
                      )) : <h5 class="alert alert-warning text-center" role="alert">Usted no tiene servicios registrado</h5>}


                    </div>
                  </div>

                </div>
              )) : <h5 class="alert alert-warning text-center" role="alert">Usted no posee talleres registrado</h5>}
              <br />
            </div>

          </div>


          <div className="container d-flex  justify-content-center">

            <TallerRegister />

            <ServiceRegister />
          </div>


        </div>
        <div
          className="tab-pane fade"
          id="nav-services"
          role="tabpanel"
          aria-labelledby="nav-services-tab"
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
