import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function CustDetailsPage() {
    const {id} = useParams();

    const [lastname, setLastName]= useState("");
    const [firstname, setFirstName]= useState("");
    const [email, setEmail]= useState("");
    const [address, setAddress]= useState("");
    const [phone, setPhone]= useState("");

    const [cust, setCust] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3030/customer/'+id)
        .then(res =>{
            setCust(res.data)
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
                    <h1 className="app-page-title mb-0">Détails du client (n° {id}): </h1>
                  </div>
                </div>
                <div className="container-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="lastname" >Nom : </label>
                            <input type="text" className="form-control" id="lastname" value={cust.lastname} onChange={(e) => setLastName(e.target.value)}/>
                            <label for="firstname">Prénom : </label>
                            <input type="text" id="firstname" className="form-control" value={cust.firstname} onChange={(e) => setFirstName(e.target.value)}/>
                            <label for="email">Email : </label>
                            <input type="text" className="form-control" id="email" value={cust.email} onChange={(e)=>  setEmail(e.target.value)}/>
                            <label for="adresse">Adresse : </label>
                            <input type="text" className="form-control" id="adress" value={cust.address} onChange={(e)=>  setAddress(e.target.value)}/>
                            <label for="phone">Phone : </label>
                            <input type="text" className="form-control" id="phone" value={cust.phone} onChange={(e)=>  setPhone(e.target.value)}/>
                        </div>
                        <div className="row justify-content-center ">
                            <button type="submit" className="btn btn-primary mt-6"> Modifier les information clients </button>
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
