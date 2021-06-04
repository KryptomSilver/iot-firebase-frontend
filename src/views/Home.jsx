import React, { Fragment, useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sensor from "../components/Sensor";

import firebaseContext from "../context/firebase/firebaseContext";

const Home = () => {
    const firebasecontext = useContext(firebaseContext);
    const { databaseF } = firebasecontext;
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    useEffect(() => {
        const getTemperature = async () => {
            const response = await databaseF
                .collection("sensores")
                .orderBy("added_at", "desc")
                .limit(1)
                .get();
            response.forEach((doc) => {
                setTemperature(doc.data().temperatura);
            });
        };
        const getHumidity = async () => {
            const response = await databaseF
                .collection("sensores")
                .orderBy("added_at", "desc")
                .limit(1)
                .get();
            response.forEach((doc) => {
                setHumidity(doc.data().humedad);
            });
        };
        setInterval(() => getTemperature(), 500);
        setInterval(() => getHumidity(), 500);
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Nav />
            <div className="container mt-5">
                <div className="row ">
                    <div className="col  offset-md-1">
                        <Sensor
                            nombre="Sensor de temperatura"
                            img="https://www.pngkit.com/png/full/252-2520545_temperatura-para-dibujar.png"
                            ancho="60"
                            alto="80"
                            texto={
                                temperature === 0
                                    ? "Sin conexión"
                                    : `Temperatura: ${temperature} \u00B0C`
                            }
                        />
                    </div>

                    <div className="col  offset-md-1">
                        <Sensor
                            nombre="Sensor de humedad"
                            img="https://image.flaticon.com/icons/png/512/728/728093.png"
                            alto="60"
                            texto={
                                humidity === 0
                                    ? "Sin conexión"
                                    : `Humedad: ${humidity} %`
                            }
                        />
                    </div>
                    {/* <div className="col">
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
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
