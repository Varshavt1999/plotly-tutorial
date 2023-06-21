import "./App.css";
import BarPlot from "./components/BarPlot";
import BoxPlot from "./components/BoxPlot";
import PiePlot from "./components/PiePlot";
import WeatherPlot from "./components/weather-plot/WeatherPlot";

function App() {
    return (
        <div>
            <WeatherPlot />
            <BarPlot />
            <PiePlot />
            {/* <BoxPlot /> */}
        </div>
    );
}

export default App;
