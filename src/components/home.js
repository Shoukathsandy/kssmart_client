import React from 'react'
import "../App.css";
import { Outlet } from "react-router-dom";
import book from "../images/kshome.png";
import Button from '@mui/material/Button';
export default function Home() {
  return (
   <>
     <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-md-12 lay1 ">
            <p  className="home"><h1>KS SMART SOLUTION</h1><span>Welcome to the home page</span></p>
            <Button variant="outlined"><a href='https://kssmart.co/' target="_blank" alt="home.page" className="abt">About</a></Button>
         
          <Outlet />
          </div>
          <div className="col-lg-6 mt-5">
          <img src={book} className="img-fluid" alt="crm.image"></img>
          
          </div>
        </div>
      </div>
   </>
  )
}
