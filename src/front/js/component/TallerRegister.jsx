import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// export const TallerRegister = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//           Agregar Taller
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Complete los campos</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Example textarea</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


export const TallerRegister = () => {
  let initialState = {
    razon_social: "",
    rif: "",
    direccion: ""
  }
  
  const [tallerRegister, setTallerRegister] = useState(initialState)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setTallerRegister({
      ...tallerRegister,
      [event.target.name]: event.target.value

    })
  }
  const handleFuntions = () => {
    handleSubmit();
    handleClose();
    window.location.reload();
    
  }
  const handleHook = () => {
    setTallerRegister(initialState);

  }
  const { actions } = useContext(Context)

  const handleSubmit = async (event) => {
    console.log("me ejecuto")
    // event.preventDefault();
    if (tallerRegister.razon_social != "" && tallerRegister.rif != "" && tallerRegister.direccion != "") {
      let response = await actions.userRegisterTaller(tallerRegister)
      if (response) {
        alert("todo esta bien")
        setTallerRegister(initialState);

      } else {
        alert("Algo salio mal")
      }
    } else {
      alert("Todos los campos son obligatorios")
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        onClick={handleShow}
      >
        Agregar taller
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        show={show} onHide={handleClose}
      >

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Complete los campos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Razon Social:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="razon_social"
                    value={tallerRegister.razon_social}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Rif:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="rif"
                    value={tallerRegister.rif}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Direccion:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={handleChange}
                    name="direccion"
                    value={tallerRegister.direccion}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>handleHook()}
              >
                Salir
              </button>
              <button type="button" className="btn btn-primary"
                onClick={() => handleFuntions()}
                >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
