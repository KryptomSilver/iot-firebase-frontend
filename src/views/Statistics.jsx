import React, { Fragment } from "react";
import LineChart from "../components/LineChart";
import Nav from "../components/Nav";

const Statistics = () => {
    return (
        <Fragment>
            <Nav active="statistics" />
            <div className="container">
                <div className="row">
                    <div className="col mt-4 d-flex justify-content-center">
                        <LineChart
                            id="ventas"
                            title="Sensor de temperatura"
                            datos={[
                                ["Enero", 32.5],
                                ["Febrero", 50.3],
                                ["Marzo", 25.54],
                                ["Abril", 42.5],
                                ["Mayo", 20.4],
                                ["Junio", 50],
                                ["Agosto", 8],
                                ["Septiembre", 75],
                                ["Octubre", 62],
                                ["Noviembre", 52],
                                ["Diciembre", 45],
                            ]}
                            titleX={"Meses"}
                            titleY={"Centigrados"}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Statistics;
