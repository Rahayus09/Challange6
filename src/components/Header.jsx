import Icon1 from '../assets/icon/Rectangular_Icon.svg';
import Menu from '../assets/icon/Menu_Icon.svg';
import Rectangle from '../assets/icon/Rectangle_Icon.svg';
// import Home from '../../assets/icon/Home_Icon.svg';
import Home from '../assets/icon/Home_Icon.svg';
import Truck from '../assets/icon/Truck_Icon.svg';
import UserPic from '../assets/img/User_Picture.jpg';
import { Container } from '@mui/material';

function Header() {
    return (
        // <Container>
        //  <div className='Header'>
            <div className="container-fluid p-0">
             <section className="navbar-section">
                <nav className="navbar navbar-expand-lg border-bottom ms-5">
                    <div className="container-fluid">
                        <div className="sidebar-toggler ps-5">
                            <a href="#"><img className="ms-5 me-5 collapseSidebar" src={Icon1}/></a>
                            <button className="btn ms-5" id="toggleSidebar">
                                <img src={Menu}/>
                            </button>
                        </div>
                  
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><img src={Menu}alt=""/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <form className="d-flex ms-5">
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-primary border-3 me-3 fw-bold"
                                            type="submit">Search</button>
                                    </form>
                                </li>
                                <li className="nav-item"> 
                                     <div className="dropdown"> 
                                        <div className='d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2'>
                                        <p className="my-0 me-2">
                                                Unis
                                                Badri</p>
                                                </div>
                                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
                                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
             </section> 

            <section className="sidebar-section">
                <div className="main-menu">
                    <a href="#">
                        <div className="box text-center d-flex justify-content-center align-items-center">
                            <img className="side-icon" src={Rectangle}/>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box text-center py-2">
                            <img className="side-icon" src={Home}/>
                            <div>Dashboard</div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="box text-center py-2">
                            <img className="side-icon" src={Truck}/>
                            <div>Cars</div>
                        </div>
                    </a>
                </div>

                <div className="collapseSidebar">
                    <div className="menu-list pt-3">
                        <h4 className="text-secondary px-3 py-2">CARS</h4>
                        <a href="#">
                            <div className="list-menu">
                                <p className="m-0">Dashboard</p>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
        </div>
        // </div>
        // </Container>
         
    )
 }

 export default Header;