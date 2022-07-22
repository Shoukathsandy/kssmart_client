import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate, Routes, Route,useParams } from "react-router-dom";
import Home from "./home";
export default function Dashboardlayout() {
    const navigate = useNavigate();
    const {employee_name}= useParams();
    return (
        <>
            <div className="dkp">
             
     
            </div>
        </>

    )
}
