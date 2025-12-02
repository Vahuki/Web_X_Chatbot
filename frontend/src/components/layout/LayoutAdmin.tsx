import React from 'react'
import { Outlet } from "react-router-dom";
import HeaderAdmin from './HeaderAdmin';
const LayoutAdmin = () => {
    return (
        <div>
            <HeaderAdmin/>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default LayoutAdmin
