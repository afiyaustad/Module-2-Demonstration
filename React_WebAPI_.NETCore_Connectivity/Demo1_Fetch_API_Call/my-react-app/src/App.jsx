import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchWeatherData } from "./services/api";

function App() {
  const [weather, setweather] = useState([]);

  useEffect(() => {
    fetchWeatherData().then((data) => setweather(data));
}, []);

return (
    <div>
        <h1>Weather Forecast</h1>
        <ul>
            {weather.map((item, index) => (
                <li key={index}>
                    {item.date} - {item.summary} ({item.temperatureC}°C)
                </li>
            ))}
        </ul>
    </div>
);
}

export default App;