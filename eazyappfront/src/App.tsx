import React, {useContext, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";
import Stock from "./Pages/Stock";
import "./App.css"
import Orders from "./Pages/Orders";
import Login from "./Pages/Auth/Login";
import {AuthContextProvider,AuthContext} from "./Context/AuthContextProvider";
function App() {
    const navigate = useNavigate();
    const [auth,setAuth] = useState<boolean>(false)
    return (
        <div className="App__Container">
            {auth && <Navbar/> }
            <AuthContextProvider>
                {auth && navigate("/orders")}
            <Routes>
                <Route path={"/login"} element={<Login setAuth={setAuth}/>}/>
                <Route path={"/stock"} element={<Stock/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
            </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default App;
