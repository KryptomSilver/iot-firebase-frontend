import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from "../../types/types";
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            return {
                ...state,
                autenticado: true,
            };
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
            };
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            return {
                ...state,
                usuario: null,
                autenticado: null,
            };
        default:
            return state;
    }
};
