import React, {useEffect, useState} from 'react';
import axios from 'axios';


function PaymentPageList(){
    
    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/payment')
        .then(res => {
            setPaymentList(res.data)
        })
    }, [])

    return (
        
        <div classNameName="App">
        <div>
          <title>Restaurant dashboard</title>
  
          <link rel="shortcut icon" href="favicon.ico" />
  
          <script defer src="assets/plugins/fontawesome/js/all.min.js"></script>
  
          <link id="theme-style" rel="stylesheet" href="assets/css/portal.css" />
        </div>
  
        <div className="app">

  
          <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
              <div className="container-xl">
                <div className="row g-3 mb-4 align-items-center justify-content-between">
                  <div className="col-auto">
                    <h1 className="app-page-title mb-0">Plats et boissons</h1>
                  </div>
                  <div className="col-auto">
                    <div className="page-utilities">
                      <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                        <div className="col-auto">
                          <form className="table-search-form row gx-1 align-items-center">
                            <div className="col-auto">
                              <input
                                type="text"
                                id="search-orders"
                                name="searchorders"
                                className="form-control search-orders"
                                placeholder="Search"
                              />
                            </div>
                            <div className="col-auto">
                              <button type="submit" className="btn app-btn-secondary">
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-auto">
                          <select className="form-select w-auto">
                            <option selected value="option-1">
                              All
                            </option>
                            <option value="option-2">This week</option>
                            <option value="option-3">This month</option>
                            <option value="option-4">Last 3 months</option>
                          </select>
                        </div>
                        <div className="col-auto">
                          <a className="btn app-btn-secondary" href="#">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-download me-1"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                              />
                            </svg>
                            Download CSV
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <nav
                id="orders-table-tab"
                className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
              >
                <a
                  className="flex-sm-fill text-sm-center nav-link active"
                  id="orders-all-tab"
                  data-bs-toggle="tab"
                  href="#orders-all"
                  role="tab"
                  aria-controls="orders-all"
                  aria-selected="true"
                >
                  Moyens de paiements 
                </a>
                {/* <a className="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Paid</a>
                      <a className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pending</a>
                      <a className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</a> */}
              </nav>
              <div className="tab-content" id="orders-table-tab-content">
                <div
                  className="tab-pane fade show active"
                  id="orders-all"
                  role="tabpanel"
                  aria-labelledby="orders-all-tab"
                >
                  <div className="app-card app-card-orders-table shadow-sm mb-5">
                    <div className="app-card-body">
                      <div className="table-responsive">
                        <table className="table app-table-hover mb-0 text-left">
                          <thead>
                            <tr>
                              <th className="cell">Nom </th>
                              <th className="cell"></th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                                
                                paymentList.map(pay => {
                                  return  (
                                  <tr key={pay.id}>
                                      <td className="cell">{pay.name}</td>
                                      <td className="cell">
                                          <a className="btn-sm app-btn-secondary" href="#">
                                                  Voir
                                          </a>
                                      </td>
                                  </tr>
                                )
                                })
                              }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
  
            <footer className="app-footer">
              <div className="container text-center py-3">
                <small className="copyright">
                  Designed with{" "}
                  <i className="fas fa-heart" ></i> by{" "}
                  <a
                    className="app-link"
                    href="http://themes.3rdwavemedia.com"
                    target="_blank"
                  >
                    Xiaoying Riley
                  </a>{" "}
                  for developers
                </small>
              </div>
            </footer>
          </div>
  
          <script src="assets/plugins/popper.min.js"></script>
          <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
  
          <script src="assets/js/app.js"></script>
        </div>
    )
}

export default PaymentPageList;