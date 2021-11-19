import React from "react";
import '/home/user/app-react/src/styles/style.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside>
            <div className="nav">
                <ul className="menu">
                    <li><NavLink className='superLi' to='/react'>React</NavLink></li>
                    <li><NavLink className='superLi' to='/javascript'>JavaScript</NavLink></li>
                    <li><NavLink className='superLi' to='/css'>HTML+CSS</NavLink></li>
                </ul>
            </div>
        </aside>
    );
}

export default Menu;