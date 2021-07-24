import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App()
{
    return (
        <div className="wrapper">
            <h1>Marine Mammals</h1>
            <nav>
                <ul>
                    <li><a href="/carte">Manatee</a></li>
                    <li><a href="/narwhal">Narwhal</a></li>
                    <li><a href="/whale">Whale</a></li>
                </ul>
            </nav>
            <BrowserRouter>
                ...
            </BrowserRouter>
        </div>
    );
}

export default App;