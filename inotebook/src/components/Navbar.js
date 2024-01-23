import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    //   useEffect(() => {
    //     // Google Analytics
    //     //ga('send', 'pageview');
    //     // (location.pathname);
    //   }, [location]);
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-sm btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-sm btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar