import React, { useEffect } from "react";
import anychart from "anychart";
const LineChart = ({
    width,
    height,
    title,
    background,
    id,
    datos,
    titleX,
    titleY,
}) => {
    if (!title) title = "Tabla";
    if (!width) width = "500px";
    if (!height) height = "400px";
    if (!background) background = "";
    if (!datos) datos = [];
    if (!titleX) titleX = "";
    if (!titleY) titleY = "";

    useEffect(() => {
        const pintar = () => {
            var data = datos;
            //Creación de la grafica
            var chart = anychart.line(data);
            //Titulo de la grafica
            chart.title(title);
            //Color de fondo
            chart.background("#505050b2");
            chart.xAxis().title(titleX);
            chart.yAxis().title(titleY);
            chart.yAxis().title().fontColor("#FFF");
            chart.xAxis().title().fontColor("#FFF");
            //Obtención de los labels de la grafia x
            // var axisLabels = chart.xAxis().labels();
            // set the container id
            chart.container(id);
            // initiate drawing the chart
            chart.draw();
        };
        pintar();
        // eslint-disable-next-line
    }, []);
    return <div id={id} style={{ width: width, height: height }}></div>;
};

export default LineChart;
