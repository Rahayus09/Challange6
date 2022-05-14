import mobil from '../../assets/img/img-mobil.png';
import logo from '../../assets/img/logo.png';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login () {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async () => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
                data: loginData,
                });
                
                if (res.status === 201) {
                    localStorage.setItem("role", "admin", 'token', res.data.access_token);
                    navigate("/dashboard", { replace: true });
                    console.log(res.data.email);
                }

                if (res.status === 201) {
                    localStorage.setItem("role", "Customer", 'token', res.data.access_token);
                    navigate("/", { replace: true });
                    console.log(res.data.email);
                }
            }   catch (error) {
                console.log(error);
            }
    };

    useEffect(() => {
        if(token) {
            navigate("/");
        }
    })
    return(
       <section className="vh-100">
        <div className="container-fluid">
            <div className="row login">
            {/* <div className=""> */}
                <div className="col-8 left-side">
                    <img src={mobil} className="img" alt=""/>
                </div>

                <div className="col-4 right">
                    <div className="form-head">
                        <img src={logo} alt=""/>
                        <h1>Create new Account</h1>
                    </div>
                     <div className='login'>
                        <>
                        <div className='col'>
                        <div className="mb-3">
                        <label for="inputEmail" className="form-label">Email</label>
                            <input 
                                placeholder='Contoh: johndee@gmail.com'
                                value={loginData.email}
                                onChange={(e) => 
                                 setLoginData({
                                   ...loginData,
                                   email: e.target.value,
                                 })
                             }
                             />
                        </div>
                             <div className="mb-3">
                                <label for="inputPassword" >Password</label>
                                <input 
                                    placeholder='6+ karakter' 
                                    type='password'
                                    value={loginData.password}
                                    onChange={(e) =>
                                    setLoginData({
                                    ...loginData,
                                    password: e.target.value,
                                    })
                            }
                            />
                            </div>
                        <Button className='button' variant='contained' onClick={handleSubmit}>Sign In</Button>
                  
                     </div>
                    </>
                    </div>
                </div>
            {/* </div> */}
            </div>
        </div>
    </section>
    );
}

export default Login;