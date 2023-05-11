import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import './NavbarStyles.css'

const Navbar = () => {
    const [click, setClick] = new useState(true);
    const handelClick = () => {
        setClick(!click);
    }
    const [bg, setBg] = new useState(false);
    const handelBg = () => {
        if (window.scrollY >= 100) {
            setBg(true);
        }
        else {
            setBg(false);
        }
    };
    window.addEventListener("scroll", handelBg);
    return (
        <>
            <div className={bg ? ("header header-bg") : ("header")}>
                <Link>
                    <h1><Link to="/">Portfolio</Link></h1>
                </Link>
                <ul className={click ? ("nav-menu") : ("nav-menu active")}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/mywork'>Experience</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handelClick}>
                    {
                        click ? (<FaBars size={20} style={{ color: "#fff" }} />) : (<FaTimes size={20} style={{ color: "#fff" }} />)
                    }

                </div>
            </div>

        </>
    )
}

export default Navbar
