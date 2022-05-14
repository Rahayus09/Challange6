import mobil from '../../assets/img/img-mobil.png';
import logo from '../../assets/img/logo.png';
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Register () {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.removeItem('token');
        navigate('/login',  { replace: true });
    };
   
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async () => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://rent-car-appx.herokuapp.com/admin/auth/register',
                data: {
                    ...registerData,
                    role: "Customer",
                },
                });
                
                if (res.status === 201) {
                    localStorage.setItem('token', res.data.token);
                }
            }   catch (error) {
                console.log(error);
            }
    };

    return(
        <body>
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
                     <div className='register'>
                        <>
                        <div className='col'>
                        <div className="mb-3">
                        <label for="inputEmail" className="form-label">Email</label>
                        <input 
                            placeholder='Contoh: johndee@gmail.com'
                            value={registerData.email}
                            onChange={(e) => 
                             setRegisterData({
                            ...registerData,
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
                            value={registerData.password}
                            onChange={(e) =>
                            setRegisterData({
                            ...registerData,
                            password: e.target.value,
                            })
                            }
                            />
                        </div>
                        <Button className='button' variant='contained' onClick={handleSubmit}>Sign Up</Button>
                        <p>
                            Already have an account?<br />
                            <span className='line' onClick={handleLogin}>
                            < a href='#'>Sign In</a>
                            </span>
                        </p>
                            {/* <Button variant='contained' onClick={handleLogin}>Sign In</Button> */}
                        </div>
                    </>
                    </div>
                </div>
            {/* </div> */}
            </div>
        </div>
        </section>
    </body>
    );
}

export default Register;