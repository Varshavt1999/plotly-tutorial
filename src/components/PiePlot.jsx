import React from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";

function PiePlot() {
    return (
        <Container>
            <Title>Pie Plot</Title>
            <Plot
                data={[
                    {
                        values: [33, 33, 34],
                        labels: ["React", "Vue", "Angular"],
                        type: "pie",
                    },
                ]}
                layout={{ width: 1200, height: 600, title: "Simple pie Plot" }}
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
export default PiePlot;
