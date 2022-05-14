import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Navbar from '../../components/Navbar';
import Car from '../../assets/img/car.png';
import { Button } from "@mui/material";
import axios from "axios";

function Home() {
    const [listData, setlistData]= useState([])
    const getData= async ()=> {
        try {
            const res=await axios.get('https://rent-car-appx.herokuapp.com/admin/auth/login')
            setlistData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <Container>
            <Navbar/>
            <Container >
                {/* {listData?.map(item =>{ */}
                    return (
                        <div className="row-landing">
                            <div className="col-6 background-color: #F1F3FF position: 'relative" id="opening">
                            <h1>Sewa & Rental Mobil Terbaik<br/>di Kawasan (Lokasimu)</h1>
                            {/* <p className=='pb-3'> */}
                            <p></p>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan
                                harga terjangkau. selalu siap melayani kebutuhanmu<br/> untuk sewa mobil selama 24 jam. <p/>
                                <Button variant='contained' onClick={" "}>Mulai Sewa Wobil</Button>
                            </div>
                            <div className="col-6">
                                {/* <div className sx= {{position: 'absolute'}} /> */}
                                <img className="img-fluid" src={Car} alt="car images"/>
                            </div>
                        </div>
                    {/* )
                })} */}
              
            </Container>
        </Container>
    )
}

export default Home;