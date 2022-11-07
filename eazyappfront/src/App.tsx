import React, {useContext, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";
import Stock from "./Pages/Stock";
import "./App.css"
import Orders from "./Pages/Orders";
import Login from "./Pages/Auth/Login";
import {AuthContext, AuthContextProvider} from "./Context/AuthContextProvider";
function App() {

    const navigate = useNavigate();
    useEffect(()=>{
        if (!sessionStorage.getItem("auth")) {
            navigate("/login");
        }
    },[])
    return (
        <div className="App__Container">
            {sessionStorage.getItem("auth") && <Navbar/> }
            <AuthContextProvider>
            <Routes>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/stock"} element={<Stock/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
            </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
