import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/auth/authContext";

const Nav = ({ active }) => {
    const authcontext = useContext(authContext);
    const { cerrarSesion } = authcontext;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand fonts" href="!#">
                    IOT-Firebase
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                className={
                                    active === "home"
                                        ? "nav-link font-roboto active"
                                        : "nav-link font-roboto"
                                }
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    active === "statistics"
                                        ? "nav-link font-roboto active"
                                        : "nav-link font-roboto"
                                }
                                to="/statistics"
                            >
                                Estadisticas
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex ">
                        <button
                            href="/login"
                            className="btn btn-secondary"
                            onClick={() => cerrarSesion()}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
