import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from '../globel';
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
export default function Datatable() {
    const [emplist, setEmplist] = useState([]);
    console.log(emplist);

    const getlist = (() => {
        fetch(`${API}/reglog/getallemployerdetails`, { method: "GET" })
            .then((data) => data.json())
            .then((datalist) => setEmplist(datalist));
    }
    );
    useEffect(() => getlist(), []);
const navigate = useNavigate();
    const deleteemployee = (id) => {
        console.log("delete movie id", id);
        fetch(`${API}/reglog/${id}`, { method: "DELETE" })
            .then(() => getlist() )
    }

    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];

    // function BasicTable() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Designation</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emplist.map(({employee_name,gender,designation,city,id},index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                {employee_name}
                                </TableCell>
                              
                                <TableCell align="right">{gender}</TableCell>
                                <TableCell align="right">{designation}</TableCell>
                                <TableCell align="right">{city}</TableCell>
                                <TableCell align="right">{id}</TableCell>
                                <TableCell align="right">   
                                <IconButton  onClick={() => deleteemployee(id)} style={{ marginLeft: "auto" }} color="error" aria-label="delete">
                                    Delete <DeleteIcon />
                                </IconButton>
                                    <IconButton  onClick={() => navigate("/edit/:id")} color="error" aria-label="delete">
                                        Edit<EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )

    };
