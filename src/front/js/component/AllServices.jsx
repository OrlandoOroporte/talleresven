import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {CardService} from "./CardService";

const AllService = (props) => {

    const { store } = useContext(Context);
    const item = {}

    return (
        <>
        <CardService/>
        </>
    )
}
