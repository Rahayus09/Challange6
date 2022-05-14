import React from 'react';
import logo from '../../src/assets/img/logo.png';
import {
    Container, Button,
  } from '@mui/material';

const styles = {
    navi: {
      backgroundColor: '#F1F3FF',    
    },
  };

function Navbar() {
    return (
        <div className="navbar " >
            <span className='logo'><img src={logo} alt="" /></span>
            <ul className='list'>
                <li className="list-item">
                    <a className="nav-link" href="# ">Our Service</a>
                </li>
                <li className="listItem">
                    <a className="nav-link" href="#Why Us">Why Us</a>
                </li>
                <li className="listItem">
                    <a className="nav-link" href="#Testimonial">Testimonial</a>
                </li>
                <li className="listItem">
                    <a className="nav-link" href="#FAQ">FAQ</a>
                </li>
                <li className="listItem">
                    <Button variant='contained' onClick={""}>Register</Button>
                </li>         
            </ul>
           
        </div>

    )
}
export default Navbar;