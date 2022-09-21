import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardService from "./CardService.jsx";

const AllService = (props) => {

    const { store } = useContext(Context);
    const item = {}

    return (
        <>
        <CardService/>
        </>
    )
}

export default AllService
