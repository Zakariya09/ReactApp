import React from 'react'
import ReactDOM  from "react-dom";

export function Portals() {
    return ReactDOM.createPortal(
    
            <h1>Hey This is portal</h1>
       ,
        document.getElementById("portal-root")
    )
}


