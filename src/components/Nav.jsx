import React from "react";

const Nav = () => {
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
                    <form className="d-flex">
                        <button
                            className="btn btn-secondary my-2 my-sm-0 font-roboto"
                            type="submit"
                        >
                            Usuario
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
