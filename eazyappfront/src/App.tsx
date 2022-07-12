import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Stock from "./Pages/Stock";
import "./App.css"
import Orders from "./Pages/Orders";

function App() {
    return (
        <div className="App__Container">
            <Navbar/>
            <Routes>
                <Route path={"/stock"} element={<Stock/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
            </Routes>
        </div>
    );
}

export default App;
