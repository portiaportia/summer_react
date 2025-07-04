import '../css/navigation.css';
import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="main-nav">
            <button id="toggle-nav" onClick = {toggleNav}>...</button>
            <ul className={menuOpen ? "" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/houses">Houses</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;