import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faBeer, faArrowLeftLong, faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
import logo from "./Assets/EZ_Logo.png"

const Navbar = () => {

    const [hover, sethover] = useState<Boolean>(false);

    let activeStyle = {
        textDecoration:"none",
        borderLeftColor:"white",
        borderLeftStyle:"solid"
    }

    let notactivestyle = {
        textDecoration:"none",
    }

    return (
        <div className={hover ? "Navbar__ContainerBig" : "Navbar__Container"}>
            <FontAwesomeIcon icon={!hover ? faArrowRightLong : faArrowLeftLong} onClick={() => sethover(!hover)}
                             className={hover ? "Navbar__arrow Navbar_arrowPadding" : "Navbar__arrow"}/>

            <span className="Navbar__LinkContainer"><img src={logo}
                                                         className={hover ? 'Navbar__logo Navbar__logohover' : 'Navbar__logo'} alt="logo"/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>EAZY</span></span>
            <NavLink to="/orders" style={({isActive})=> isActive ? activeStyle : notactivestyle}><span
                className="Navbar__LinkContainer"><FontAwesomeIcon icon={faCartShopping}
                                                                   className={hover ? 'Navbar__Icons Navbar__IconPadding' : 'Navbar__Icons'}/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Orders</span></span></NavLink>
            <NavLink to="/stock" style={({isActive})=> isActive ? activeStyle : notactivestyle}><span
                className="Navbar__LinkContainer"><FontAwesomeIcon icon={faBeer}
                                                                   className={hover ? 'Navbar__Icons Navbar__IconPadding' : 'Navbar__Icons'}/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Stock</span></span></NavLink>
        </div>
    );
};

export default Navbar;