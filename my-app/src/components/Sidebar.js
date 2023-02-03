import React from "react";
import css from "./css/Sidebar.module.css"


// 1. Create functional component (as a regular function)
 function Sidebar() {
     return (
     <div className = {css.sidebar}>
        <a href="">My Photos</a>
        <a href="">My Illustrations</a>
        <a href="">My Paintings</a>
     </div>
     )
}

// 2. Export functional component
export default Sidebar; 