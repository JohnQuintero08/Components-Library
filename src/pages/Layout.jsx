import React from "react";
import {Outlet} from 'react-router-dom'
import NavigationBar from "../components/NavigationBar";

export default function Layout(){
    return (
        <div className="container-general">
            <NavigationBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}