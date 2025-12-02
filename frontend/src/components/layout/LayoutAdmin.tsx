import React from 'react'
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default LayoutAdmin
