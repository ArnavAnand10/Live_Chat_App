import React, { useState } from "react";
import welcome from "./welcome.png";
import { Alert, Button, IconButton, TextField } from "@mui/material";
import "./myStyles.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Backdrop from "@mui/material";

import CircularProgress from '@mui/material/CircularProgress';

import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import { useNavigate } from "react-router";


import CloseIcon from '@mui/icons-material/Close';

function LandingPage() {

    var [isRegister, setMainScreen] = useState(false);
    const navigator = useNavigate();

    function Login() {



        const [snackBarDisplay, setSnackBarDisplay] = useState(false);

        const [logInStatus, setSignInStatus] = useState("")
        const [loading, setLoading] = useState(false);




        const [emailValue, setEmailValue] = useState("");
        const [passValue, setPassValue] = useState("");




        const loginHandler = async () => {
            const data = {
                email: emailValue,
                password: passValue,

            }



            console.log("function called")
            setLoading(true);

            try {

                const config = {
                    headers: {
                        "Content-type": "application/json",
                    }
                }
                const response = await axios.post("http://localhost:8080/user/login", data, config)
                setLoading(false);
                navigator('/app/welcome')


            }
            catch (e) {
                console.log("error")
                console.log(e);
                setSnackBarDisplay(true);
                setLoading(false);

            }





        }


        function onMailChange(e) {
            setEmailValue(e.target.value)

        }
        function onPassChange(e) {
            setPassValue(e.target.value)
        }


        // closing snackbar

        function handleClose() {
            setSnackBarDisplay(false)

        }


        function LoginButton() {
            if (!loading) {
                return (
                    <Button disableElevation variant="contained" size="large" onClick={loginHandler} >
                        <p>Login</p>
                    </Button>
                )

            }
            else {
                return (
                    <Button disableElevation variant="contained" size="large" onClick={loginHandler} >
                        <CircularProgress />
                    </Button>
                )

            }






        }

        return (

            <div className="login-container">

                <Snackbar open={snackBarDisplay} autoHideDuration={3000}>

                    <Alert severity="error" sx={{ width: '100%' }}>
                        Invalid Username or Password
                        <IconButton
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Alert>



                </Snackbar>


                <div className="image-container">
                    <img src={welcome}></img>
                </div>

                <div className="form-container">
                    <div className="login-box">
                        <p className="con-title"> Login To Your Account </p>
                        <hr />

                        <TextField id="standard-basic" label="Email" variant="outlined"
                            key={"1"}
                            value={emailValue}
                            // value={emailValue}
                            onChange={onMailChange}

                        >

                        </TextField>





                        <TextField id="outlined-password-input" label="Password"
                            key={"2"}
                            type="password"
                            variant="outlined"
                            value={passValue}
                            onChange={onPassChange}
                        >

                        </TextField>



                        <LoginButton />




                        <p style={{
                            textAlign: "center", fontFamily: "helvetica"
                        }}>New to Chat App ? <Button variant="text"
                            onClick={() => {
                                setMainScreen(false)
                            }

                            }
                        >Create New Account</Button>
                        </p>

                    </div>

                </div>

            </div>
        )
    }

    function Register() {

        const [singupUsername, setSingupUsername] = useState("");
        const [singupEmail, setSingupEmail] = useState("");
        const [signupPassword, setsignupPassword] = useState("");
        const [snackBarDisplaySignUp, setSnackBarDisplaySingUp] = useState(false);
        const [snackBarTextSignup, setSnackBarTextSignup] = useState("");
        const [loadingSignup, setLoadingSignup] = useState(false);

        function onUsernameChangeSignup(e) {
            setSingupUsername(e.target.value)
        }

        function onEmailChangeSignup(e) {
            setSingupEmail(e.target.value)
        }

        function onPassChangeSignup(e) {
            setsignupPassword(e.target.value)
        }

        function handleClose() {
            setSnackBarDisplaySingUp(false);

        }

        async function registerHandler() {




            if (singupEmail.length == 0 || setSingupUsername.length == 0 || signupPassword.length == 0) {
                setSnackBarTextSignup("All fields are required")
                setSnackBarDisplaySingUp(true)
                console.log("empty values");
                

            } else {

                const data = {
                    name: singupUsername,
                    email: singupEmail,
                    password: signupPassword,


                }

                try {

                    setLoadingSignup(true)

                    const config = {
                        headers: {
                            "Content-type": "application/json",
                        }
                    }
                    const response = await axios.post("http://localhost:8080/user/register", data, config)
                    console.log(response)
                    setLoadingSignup(false)
                    navigator('/app/welcome')


                }
                catch (e) {

                    console.log("error")
                    if(e.response.status==501){
                        setSnackBarDisplaySingUp(true);
                        setSnackBarTextSignup("Username Already Taken");
                    }else if(e.response.status==502){
                        setSnackBarDisplaySingUp(true);
                        setSnackBarTextSignup("User Already Exists");

                    }
                   
                    setLoadingSignup(false)


                }
            }

        }

        function ButtonSingup() {
            if (loadingSignup == true) {
                return (
                    <Button disableElevation variant="contained" size="large" onClick={registerHandler} >
                        <CircularProgress />
                    </Button>
                )
            } else {
                return (
                    <Button disableElevation variant="contained" size="large" onClick={registerHandler} >
                        <p>Singup</p>
                    </Button>
                )
            }
        }


        function SnackBarSignup() {
            return (
                <Snackbar open={snackBarDisplaySignUp} autoHideDuration={3000}>

                    <Alert severity="error" sx={{ width: '100%' }}>
                        {snackBarTextSignup}
                        <IconButton
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Alert>



                </Snackbar>
            )
        }


        return <div className="login-container">

            <SnackBarSignup />


            <div className="image-container">
                <img src={welcome}></img>
            </div>

            <div className="form-container">
                <div className="login-box">
                    <p className="con-title"> Create Your Account </p>
                    <hr />


                    <TextField onChange={onUsernameChangeSignup} required id="standard-basic" label="Username" variant="outlined">

                    </TextField>

                    <TextField onChange={onEmailChangeSignup} required id="standard-basic" label="Email" variant="outlined">

                    </TextField>

                    <TextField onChange={onPassChangeSignup} required id="outlined-password-input" label="Password"
                        type="password"
                        variant="outlined">

                    </TextField>

                    <Button>

                    </Button>

                    <ButtonSingup />

                    <p style={{
                        textAlign: "center", fontFamily: "helvetica"
                    }}>
                        Already Have an Account?

                        <Button variant="text"

                            onClick={() => {
                                setMainScreen(true);
                            }

                            }
                        >Login</Button>
                    </p>
                </div>

            </div>

        </div>
    }

    return (isRegister ? <Login /> : <Register />)




}



export default LandingPage