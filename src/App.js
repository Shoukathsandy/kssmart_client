import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Login } from "./login";
import { Registration } from "./registration";
import {Employeedatalist} from "./components/Employeedatalist";
import Dashboardlayout from "./components/Dashboardlayout";
import Home from "./components/home";
import Layout from "./components/Layout";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import Addemployee from "./components/Addemployee";
import Requriedauth from "./components/Requriedauth";

function App() {
  const navigate = useNavigate();
  // const [mode, setMode] = useState("light");
  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    // <ThemeProvider theme={theme} >
    //   <Paper elevation={3}  className="dkp" style={{ minWidth: "100vh" }} >
    <>
      <div className="App">
      <AppBar position="static" className="bar">
                    <Toolbar >
                        {/* <Button color="inherit" onClick={() => { navigate('/') }}>Login</Button> */}
                        <Button color="inherit" onClick={() => { navigate('/kssmart') }}>ks Smart solution</Button>
                        <Button color="inherit" onClick={() => { navigate('/Dashboard/homepage') }}>HOME</Button>
                        <Button color="inherit" onClick={() => { navigate('/employeedata') }}>Employee Data</Button>
                        <Button color="inherit" onClick={() => { navigate('/about') }}>About </Button>
                        <Button color="inherit" onClick={() => { navigate('/login') }}>Logout </Button>
                    </Toolbar>
                </AppBar>
                </div>
                <div>

        <Routes>
          <Route path="/" exact element={<Layout />} >

            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route index element={<Registration />} />
            <Route path="registration" element={<Registration />} />
            </Route>
            <Route path="/Dashboard/:employee_name" exact element={<Requriedauth><Dashboardlayout /></Requriedauth>} >
            <Route index element={<Home / >} />
          
            </Route>
              <Route path="/Dashboard/homepage" element={<Home / >} />
               <Route path="/employeedata" element={<Employeedatalist / >} />
               <Route path="/addnewemployee" element={<Addemployee />} />
               <Route path="/edit/:id" element={<Addemployee />} />






            </Routes>

          </div>
        </>
    //  </Paper >
    // </ThemeProvider>
  );
}

export default App;
