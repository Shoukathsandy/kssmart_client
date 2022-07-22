import book from "../images/Sign1.png";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
function Layout() {
const navigate= useNavigate();
  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-md-12 lay1 ">
            <p  className="heading"><h1>KS SMART SOLUTION</h1></p>
          <AppBar position="static" className="lay"  >
            <Toolbar  variant="outlined">
              {/* <Button color="inherit" onClick={() => { navigate('/') }}>Login</Button> */}
              <Button color="inherit" onClick={() => { navigate('/login') }}>login</Button>
              <Button color="inherit" onClick={() => { navigate('/registration') }}>registration</Button>
           
             
            </Toolbar>
          </AppBar>
          <Outlet />
          </div>
          <div className="col-lg-6 mt-5">
          <img src={book} className="img-fluid" alt="crm.image"></img>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;