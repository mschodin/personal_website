import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import "./Nav.css";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <>
            {/* <Link to="/experience" className="navLink">Page3</Link>
            <Link to="/about" className="navLink">Page2</Link>
            <Link to="/" className="navLink">Page1</Link> */}
            <Link to="/experience" className="navLink">Page3</Link>
            <Link to="/about" className="navLink">Page2</Link>
            <Link to="/" className="navLink">Page1</Link>
        </>
    );
};

export default NavBar;