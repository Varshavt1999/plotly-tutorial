import React from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";

function BarPlot() {
    return (
        <Container>
            <Title>Bar Plot</Title>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [1, 2, 3],
                        type: "bar",
                        mode: "lines+markers",
                        marker: { color: "blue" },
                    },
                ]}
                layout={{ width: 1200, height: 600, title: "Simple bar Plot" }}
            ></Plot>
        </Container>
    );
}
const Container = styled.div`
    padding: 80px;
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 30px;
    font-size: 26px;
    font-weight: bold;
`;
export default BarPlot;
