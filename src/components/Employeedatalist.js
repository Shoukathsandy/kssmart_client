import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import Datatable from "./Datatable";
import { useNavigate } from 'react-router-dom';

import "../App.css";

export  function Employeedatalist() {
  const navigate = useNavigate();
  return (
    <>
    <div>
        <h1 >
            Empolyee Data
        </h1>
    </div>
    <div className="btsr">
    <IconButton onClick={()=>navigate("/addnewemployee")}  color="primary" >
      <PersonAddIcon />Add Employee
    </IconButton>
    <nav class="navbar navbar-light bg-light search">
  <form class="form-inline btsr1">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
  </form>
</nav>
    </div>
    <Datatable />

</>
  )
}
