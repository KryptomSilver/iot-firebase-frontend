import React from "react";

const Sensor = ({ nombre, img, ancho, alto, texto }) => {
    return (
        <div
            className="card text-white bg-secondary boton"
            style={{ maxWidth: "20rem", height: "15.5rem" }}
        >
            <div className="card-header bg-primary text-center font-roboto ">
                {nombre}
            </div>

            <div className="d-flex align-items-center justify-content-center pt-4">
                <img
                    src={img}
                    alt=""
                    style={{ maxHeight: "4.5rem" }}
                    height={`${ancho}` || "80"}
                    width={`${alto}` || "60"}
                    className="text-center"
                />
            </div>
            <div className="card-body d-flex flex-row justify-content-center align-items-end">
                <div className="form-group">
                    {texto ? (
                        <p className="font-roboto-light">{texto}</p>
                    ) : (
                        <p className="font-roboto-light">
                            Temperatura: 4 &deg;C
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sensor;
