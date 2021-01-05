import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SocialLinks from "./SocialLinks";


const Navbar = () => {
    const [onTop, setOnTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 0)
                setOnTop(false)
            else
                setOnTop(true)
        })
    }, [onTop])

    return (
        <nav className={ onTop ? 'nav-top' : 'nav-scroll' }>
            <div className="navbar container">
                <div className="navbar__main-logo">
                    <a href="/">
                        <span>Muhammad</span>
                        <span>Umar</span>
                    </a>
                </div>
                <div className="navbar__menu-items">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about-me'}>About</Link>
                    <Link to={'/portfolio'}>Portfolio</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
                <div className="navbar__social-items">
                    <SocialLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;