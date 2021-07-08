import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function OrderDetailsPage() {

    const {id} = useParams();

    const [code, setCode]= useState("");
    const [status, setStatus]= useState("");
    const [date, setDate]= useState("");
    const [order, setOrder] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3030/order/'+id)
        .then(res =>{
            setOrder(res.data)
        })
    }, [])

    function handleSubmit(e){
        e.preventDefault();
    }

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
                    <h1 className="app-page-title mb-0">Détails de la commande (n° {id}): </h1>
                  </div>
                </div>
                <div className="container-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="code" >Code : </label>
                            <input type="text" className="form-control" id="code" value={order.code} onChange={(e) => setCode(e.target.value)}/>
                            <label for="status">Status : </label>
                            <input type="text" id="status" className="form-control" value={order.status} onChange={(e) => setStatus(e.target.value)}/>
                            <label for="date">Date : </label>
                            <input type="text" className="form-control" id="date" value={order.date} onChange={(e)=>  setDate(e.target.value)}/>
                        </div>
                        <div className="row justify-content-center ">
                            <button type="submit" className="btn btn-primary mt-6"> Modifier la commande </button>
                        </div>
                    </form>
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
