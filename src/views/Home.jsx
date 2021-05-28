import React, { Fragment } from "react";
import Nav from "../components/Nav";
import Sensor from "../components/Sensor";

const Home = () => {
    return (
        <Fragment>
            <Nav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Sensor
                            nombre="Sensor de temperatura"
                            img="https://www.pngkit.com/png/full/252-2520545_temperatura-para-dibujar.png"
                            ancho="60"
                            alto="80"
                        />
                    </div>

                    <div className="col">
                        <Sensor
                            nombre="Sensor de humedad"
                            img="https://image.flaticon.com/icons/png/512/728/728093.png"
                            alto="60"
                            texto="Humedad: 80 %"
                        />
                    </div>
                    <div className="col">
                        <Sensor
                            nombre="Sensor de gas"
                            ancho="85"
                            img="https://images.vexels.com/media/users/3/150012/isolated/preview/bf8475104937ca2ee44090829f4efa3a-icono-de-cilindro-de-gas-peque-ntilde-o-by-vexels.png"
                            texto="Gas: 50 %"
                        />
                    </div>
                    <div className="col">
                        <Sensor
                            nombre="Sensor de agua"
                            ancho="85"
                            img="https://i.pinimg.com/originals/1c/0b/0e/1c0b0ec55a4d4171f959308272028bdf.png"
                            texto="Nivel: 40 %"
                        />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col">
                        <Sensor
                            nombre="Sensor de presión"
                            img="https://image.flaticon.com/icons/png/512/234/234771.png"
                            texto="Presión: 80 mb"
                        />
                    </div>

                    <div className="col">
                        <Sensor
                            nombre="Sensor de luminosidad"
                            img="https://upsasoyyo.files.wordpress.com/2012/12/cropped-foco-de-idea.png?w=210"
                            alto="60"
                            texto="Luminosidad: 50 %"
                        />
                    </div>
                    <div className="col">
                        <Sensor
                            nombre="Sensor de movimiento"
                            img="https://image.flaticon.com/icons/png/512/1340/1340014.png"
                            texto="Movimiento: Hay movimiento"
                        />
                    </div>
                    <div className="col">
                        <Sensor
                            nombre="Sensor de puerta"
                            img="https://i.pinimg.com/originals/65/20/46/65204611336c9fa604d265a7782ebf16.png"
                            texto="Puerta: Cerrada"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
