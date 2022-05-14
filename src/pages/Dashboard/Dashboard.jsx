import sort from '../../assets/icon/fi_sort.png';
import Header from '../../components/Header';
import Rectangle from './../../assets/icon/Rectangle.png';

function Dashboard() {
    return(
        <div>
        <Header/>
          
            <div className="container mt-5">
                <h2>Dashboard</h2>
                <h3><img src={Rectangle} alt=""/> list order</h3>
                <table id="datatable" className="table">
                    <thead>
                        <tr>
                            <th className="text-center">No</th>
                            <th>User Email <img src={sort} alt=""/></th>
                            <th>Car <img src={sort} alt=""/></th>
                            <th>Start Rent <img src={sort} alt=""/></th>
                            <th>Finish Rent <img src={sort}alt=""/></th>
                            <th>Price <img src={sort} alt=""/></th>
                            <th>Satus <img src={sort} alt=""/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">4</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">5</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">6</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">7</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">8</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">9</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                        <tr>
                            <td className="text-center">10</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Satus</td>
                        </tr>
                    </tbody>
                </table>
                <div className="bottom">
                    <div className="row">
                        <p className="limit col-lg-1 col-md-2">Limit</p>
                        <p className="tjtp col-lg-2 col-md-2">Jump to page</p>
                    </div>
                    <div className="row">
                        <div className="drop col-lg-1 col-md-2 col-12">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>10</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        <div className="jtp col-lg-4 col-md-4 col-12">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <button type="button" className="btn btn-primary">Go</button>
                        </div>
                        <div className="paging col-lg-7 col-md-6 col-12 justify-content-end">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">9</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
          
        // </div>
        )
    };

export default Dashboard;