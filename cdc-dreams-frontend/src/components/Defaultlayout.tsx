// import React from 'react'
import { Link, Navigate } from "react-router-dom";

import { Outlet } from "react-router-dom"
import { useStateContext } from "../context/useStateContext"


interface User {
    name: string;
}

const Defaultlayout = () => {
    const { user,token } = useStateContext();

    // if an unauthenticated user tries to access any page under default layout.(if the token is not found)
    // he/she will be redirected to login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (event: React.MouseEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <div id="defaultLayout"> 
                <aside>
                    <Link to="/dashboard"> Dashboard</Link>
                    <Link to="/users"> Users</Link>
                </aside>

                <div className="content">
                    <header>
                        <div> header</div>
                        <div>
                            {(user as User)?.name}
                            <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
                        </div>
                    </header>

                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Defaultlayout
