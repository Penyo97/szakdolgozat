import React, {useContext, useState} from 'react';
import "./Login.css"
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {AuthContext} from "../../Context/AuthContextProvider";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from "react-router-dom";

const MySwal = withReactContent(Swal)
const Login = () => {
    const navigate = useNavigate();

    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {setIsLogged} = useContext(AuthContext);
    const auth = async () => {
        await axios.post("http://localhost:8080/login", {
            "mail": mail,
            "password": password
        }).then(res => {
                setIsLogged(res.data as boolean)
                sessionStorage.setItem("auth",res.data)
                res.data && navigate("/orders")
                res.data ? (
                    MySwal.fire({
                        icon: 'success',
                        title: 'Logged',
                    })
                ) : (
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong email or password',
                    })
                )
            }
        ).catch(err => console.log(err));
    }

    return (
        <div className="Login__Container">
            <Paper className="Login__paper" elevation={16}>
                <div>
                    <h1>Login</h1>
                    <br/>
                    <TextField label="Mail" variant="outlined"
                               className="Login__input"
                               onChange={(e) => {
                                   setMail(e.target.value)
                               }
                               }/>
                    <br/>
                    <TextField label="Password" variant="outlined" className="Login__input"
                               onChange={(e) => {
                                   setPassword(e.target.value)
                               }
                               }/>
                    <br/>
                    <Button variant="contained" onClick={auth}>Login</Button>
                </div>
            </Paper>
        </div>
    );
};


export default Login;