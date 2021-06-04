import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const RutaPublica = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { autenticado, UserAuth } = authContext;

    useEffect(() => {
        UserAuth();
        // eslint-disable-next-line
    }, []);

    return (
        <Route
            {...props}
            render={(props) =>
                !autenticado ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />

    );
};

export default RutaPublica;
