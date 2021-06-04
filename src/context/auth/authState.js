import { useContext, useReducer } from "react";
import {
    CERRAR_SESION,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
} from "../../types/types";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import "firebase/auth";

import firebaseContext from "../firebase/firebaseContext";

const AuthState = (props) => {

    const firebasecontext = useContext(firebaseContext);
    const { AppInitFirebase } = firebasecontext;
    const initialState = {
        usuario: null,
        autenticado: null,
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    //Iniciar sesión
    const iniciarSesion = async (datos) => {
        await AppInitFirebase.auth()
            .signInWithEmailAndPassword(datos.email, datos.password)
            .then((userCredential) => {
                const user = userCredential;
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: user.email,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const UserAuth = () => {
        AppInitFirebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: OBTENER_USUARIO, payload: user });
            } else {
                dispatch({ type: CERRAR_SESION });
            }
        });
    };
    const cerrarSesion = () => {
        AppInitFirebase.auth().signOut();
        dispatch({ type: CERRAR_SESION });
    };
    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                autenticado: state.autenticado,
                iniciarSesion,
                UserAuth,
                cerrarSesion,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
