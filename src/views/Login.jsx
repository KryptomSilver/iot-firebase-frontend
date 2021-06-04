import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth/authContext";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authcontext = useContext(AuthContext);
    const { autenticado, iniciarSesion } = authcontext;
    // En caso de que el password o usuario no exista
    useEffect(() => {
        if (autenticado) {
            props.history.push("/");
        }
        // eslint-disable-next-line
    }, [autenticado, props.history]);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            console.log("Esta vaciooo");
            return;
        }
        if (!password) {
            console.log("Esta vaciooo");
            return;
        }
        iniciarSesion({ email, password });
    };
    return (
        <div className="container d-flex justify-content-center">
            <form
                action=""
                className="card bg-secundary login"
                onSubmit={onSubmit}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <img
                        src="logo.png"
                        alt=""
                        height="100"
                        width="100"
                        className="logo-login"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Correo:</label>
                    <input
                        type="email"
                        className="form-control"
                        name=""
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="">Passsword:</label>
                    <input
                        type="password"
                        className="form-control"
                        name=""
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group mt-4 d-flex align-items-end justify-content-center">
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="btn btn-primary btn"
                    />
                </div>
                {/* <div className="form-group mt-4 d-flex align-items-end justify-content-center">
                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="btn btn-secundary mb-3"
                    />
                </div> */}
            </form>
        </div>
    );
};

export default Login;
