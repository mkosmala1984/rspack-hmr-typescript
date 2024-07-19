import React, {useEffect, useState} from "react";
import "./App.css";
import {Color, Option} from "./Types";

const options: Option[] = [
    {
        label: 'red',
        value: 'RED',
    },
    {
        label: 'green',
        value: 'GREEN',
    },
    {
        label: 'blue',
        value: 'BLUE',
    },
	{
		label: 'black',
		value: 'BLACK',
	},
];

function App() {
    const [count, setCount] = useState(0);
	const [color, setColor] = useState<Color>('RED');

    return (
        <div className="App">
            <h1>Rspack + React</h1>
            <select value={color} onChange={e => setColor(e.target.value as Color)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)} style={{backgroundColor: color}}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Rspack and React logos to learn more
            </p>
        </div>
    );
}

export default App;
