import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import{AiOutlineSearch} from "react-icons/ai";
import {FiShoppingCart} from 'react-icons/fi';
import {RiArrowDropDownFill} from 'react-icons/ri';
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <div className="nav-header">
                <div>Alba Helpline: 04829 222776</div>
                <div className="nav-header__authetication">
                    <div>Register</div>
                    <div className="nav-header__login">Login</div>
                </div>
            </div>
            <div className="navbar">
                <h3>Logo</h3>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Men <RiArrowDropDownFill/></a>
                    <a href="/#">Women <RiArrowDropDownFill/></a>
                    <a href="/#">Girls <RiArrowDropDownFill/></a>
                    <a href="/#">Boys<RiArrowDropDownFill/></a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
                <div className="nav-icons">
                    <AiOutlineSearch color='#A4A4A4' />
                    <div className="nav-cons_count">0</div>
                    <FiShoppingCart color='#A4A4A4' className="nav-cons_list"/>
                    </div>
            </div>
        </header>
    );
}

export default Navbar;