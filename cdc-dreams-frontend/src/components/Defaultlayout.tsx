// import React from 'react'
import { Navigate } from "react-router-dom";

import { Outlet } from "react-router-dom"
import { useStateContext } from "../context/useStateContext"

const Defaultlayout = () => {
    const { token } = useStateContext();

    // if an unauthenticated user tries to access any page under default layout.(if the token is not found)
    // he/she will be redirected to login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <div>
                <h1>Default layout</h1>
                <Outlet />
            </div>
        </>
    );
}

export default Defaultlayout
