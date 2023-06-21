import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";

function WeatherPlot() {
    const [data, setData] = useState([]);
    const handleKeyDown = (event) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
        }
    };
    const handleWheel = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        setData([
            {
                humidity: "44",
                potentio: "1",
                temp: "20",
                time: "14:20:40",
            },
            {
                humidity: "41",
                potentio: "3",
                temp: "28",
                time: "14:20:50",
            },
            {
                humidity: "34",
                potentio: "10",
                temp: "60",
                time: "14:21:00",
            },
            {
                humidity: "54",
                potentio: "2",
                temp: "12",
                time: "14:21:12",
            },
            {
                humidity: "49",
                potentio: "9",
                temp: "98",
                time: "14:21:20",
            },
        ]);
    }, []);
    var temperature = data.map((val) => val.temp);
    var potentio = data.map((val) => val.potentio);
    var humidity = data.map((val) => val.humidity);
    var time = data.map((val) => val.time);

    return (
        <MainContainer>
            <InputsContainer>
                <InputBox>
                    <Input
                        type="number"
                        placeholder="temperature..."
                        onKeyDown={handleKeyDown}
                        onWheel={handleWheel}
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="number"
                        placeholder="humidity..."
                        onKeyDown={handleKeyDown}
                        onWheel={handleWheel}
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="number"
                        placeholder="potentio..."
                        onKeyDown={handleKeyDown}
                        onWheel={handleWheel}
                    />
                </InputBox>
            </InputsContainer>
            {data.length !== 0 && (
                <Plot
                    data={[
                        {
                            x: time ? time : 0,
                            y: temperature ? temperature : 0,
                            type: "scattergl",
                            marker: { color: "red" },
                            name: "temperature",
                        },
                        {
                            x: time ? time : 0,
                            y: humidity ? humidity : 0,
                            type: "scattergl",
                            marker: { color: "blue" },
                            name: "humidity",
                        },
                        {
                            x: time ? time : 0,
                            y: potentio ? potentio : 0,
                            type: "scattergl",
                            marker: { color: "yellow" },
                            name: "potentio",
                        },
                    ]}
                    layout={{
                        width: 1200,
                        height: 500,
                        title: "weather Plot",
                        legend: {
                            x: 1,
                            y: 1,
                            traceorder: "normal",
                            font: {
                                family: "sans-serif",
                                size: 12,
                                color: "black",
                            },
                            bgcolor: "#a7a7a7",
                            bordercolor: "grey",
                            borderwidth: 2,
                        },
                    }}
                ></Plot>
            )}
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 80px;
`;
const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    margin-bottom: 30px;
`;
const InputBox = styled.div`
    border: 1px solid grey;
    border-radius: 8px;
`;
const Input = styled.input`
    padding: 10px;
    width: 100%;
    font-size: 16px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
export default WeatherPlot;
