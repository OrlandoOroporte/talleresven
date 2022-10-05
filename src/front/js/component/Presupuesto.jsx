import React from "react";


const Presupuesto = (props) => {

    return(
        <>
        <div className="container">
        <div className="row">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.name}{props.precio}</li>

</ul>
</div>
</div>

        </>
    )
}

export default Presupuesto