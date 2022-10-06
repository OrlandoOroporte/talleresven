import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardService from "./CardService.jsx";


const AllService = (props) => {
    const { store } = useContext(Context);
    //let service = store.service

    console.log(store.service)
    return (
        <>
            <div className="container margin" >
                <div className="row col-14">
                    {store.service.map((item) => {
                        return (
                            <CardService key={item.id} service={item} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AllService
