import React, {useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faBeer, faArrowLeftLong, faArrowRightLong,faChartSimple,faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
import logo from "./Assets/EZ_Logo.png"

const Navbar = () => {

    const [hover, sethover] = useState<Boolean>(false);
    const location = useLocation();

    let activeStyle = {
        textDecoration: "none",
        borderLeftColor: "white",
        borderLeftStyle: "solid",
        width: "90%"
    }

    let notactivestyle = {
        textDecoration: "none",
    }

    const checker = (url:String): Boolean => {
        return location.pathname === url;
    }

    return (
        <div className={hover ? "Navbar__ContainerBig" : "Navbar__Container"}>
                        <span className="Navbar__LinkContainer"><img src={logo}
                                                                     className={hover ? 'Navbar__logo Navbar__logohover' : 'Navbar__logo'}
                                                                     alt="logo"/><span
                            className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>EAZY</span></span>
            <FontAwesomeIcon icon={!hover ? faArrowRightLong : faArrowLeftLong} onClick={() => sethover(!hover)}
                             className={hover ? "Navbar__arrow Navbar_arrowPadding" : "Navbar__arrow"}/>

            <NavLink to="/orders" style={({isActive}) => isActive ? activeStyle : notactivestyle}><span
                className="Navbar__LinkContainer"><FontAwesomeIcon icon={faCartShopping}
                                                                   className={checker("/orders") && hover
                                                                       ? 'Navbar__Icons Navbar__ActiveIconPadding'
                                                                       : !checker("/orders") &&  hover ? 'Navbar__Icons Navbar__IconPadding'
                                                                           : 'Navbar__Icons'}/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Orders</span></span></NavLink>
            <NavLink to="/stock" style={({isActive}) => isActive ? activeStyle : notactivestyle}><span
                className="Navbar__LinkContainer"><FontAwesomeIcon icon={faBeer}
                                                                   className={checker("/stock") && hover
                                                                       ? 'Navbar__Icons Navbar__ActiveIconPadding'
                                                                       : !checker("/stock") &&  hover ? 'Navbar__Icons Navbar__IconPadding'
                                                                           : 'Navbar__Icons'}/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Stock</span></span></NavLink>
            {sessionStorage.getItem("position") === "1" && (
                <NavLink to="/charts" style={({isActive}) => isActive ? activeStyle : notactivestyle}><span
                    className="Navbar__LinkContainer"><FontAwesomeIcon icon={faChartSimple}
                                                                       className={checker("/charts") && hover
                                                                           ? 'Navbar__Icons Navbar__ActiveIconPadding'
                                                                           : !checker("/charts") && hover ? 'Navbar__Icons Navbar__IconPadding'
                                                                               : 'Navbar__Icons'}/><span
                    className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Charts</span></span></NavLink>
            )}
            <NavLink to="/login" onClick={
                () => {
                    sessionStorage.clear();
                }
            } style={({isActive}) => isActive ? activeStyle : notactivestyle}><span
                className="Navbar__LinkContainer"><FontAwesomeIcon icon={faRightFromBracket}
                                                                   className={checker("/login") && hover
                                                                       ? 'Navbar__Icons Navbar__ActiveIconPadding'
                                                                       : !checker("/login") && hover ? 'Navbar__Icons Navbar__IconPadding'
                                                                           : 'Navbar__Icons'}/><span
                className={hover ? 'Navbar__MenuTextNone Navbar__MenuText' : 'Navbar__MenuTextNone'}>Exit</span></span></NavLink>
        </div>
    );
};

export default Navbar;