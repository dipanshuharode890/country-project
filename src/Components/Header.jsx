import { NavLink, Route, Routes } from "react-router";
import './header.css'
import '../App.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {

    const [show, setShow] = useState(false);

    const handleButtonToggl = () => {
        return setShow(!show);
    }

    return (
        <>
            <div className="container">
                <div>
                    <NavLink className="logo" to="/"><h1>WorldAtLas</h1></NavLink>
                </div>

                <nav className={show ? "menu-mobile" : "menu-web"}>
                    {/* style={{}} */}
                    <ul>
                        <li><NavLink className="link" to="/"><h1>Home</h1></NavLink></li>
                        <li><NavLink className="link" to="/about"><h1>About</h1></NavLink></li>
                        <li><NavLink className="link" to="/country"><h1>Country</h1></NavLink></li>
                        <li><NavLink className="link" to="/contact"><h1>Contact</h1></NavLink></li>
                    </ul>
                </nav>

                <div className="ham-menu">
                    <button style={{height:'2rem', width:'4rem', marginTop:'1rem'}} onClick={handleButtonToggl}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;