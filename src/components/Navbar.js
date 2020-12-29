import React, { useEffect, useState } from "react";
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
                    <a href={'/'}>Home</a>
                    <a href={'/'}>About</a>
                    <a href={'/'}>Portfolio</a>
                    <a href={'/'}>Contact</a>
                </div>
                <div className="navbar__social-items">
                    <SocialLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;