import React, { useContext } from "react";
import authContext from "../context/auth/authContext";

const Nav = () => {
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
                            <a
                                className="nav-link font-roboto active"
                                href="!#"
                            >
                                Home
                                <span className="visually-hidden">
                                    (current)
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-roboto" href="!#">
                                Sensores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-roboto" href="!#">
                                Estadisticas
                            </a>
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
