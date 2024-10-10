/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    Vite logo
                </a>
                <a href="https://react.dev" target="_blank">
                    React logo
                </a>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
                {/* Add the line below to include the text "learn react" */}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR. Learn React here!
                </p>
            </div>
        </>
    );
}

export default App;
