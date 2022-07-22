import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './globel';

import { toast } from "react-toastify";

const FormValidationSchema = yup.object({
    username: yup.string().required("enter valid username").min(1),
    password: yup.string().required("enter correct password"),

});

export function Login() {
    const navigate = useNavigate();
    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            Link(values);
            console.log(values);
        },

    });

    const Link = (linking) => {
        fetch(`${API}/reglog/login`,
            {
                method: "POST",
                body: JSON.stringify(linking),
                headers: { 'Content-Type': 'Application/json' },
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                    toast.error("ERROR:" + data.error);
                } else {
                    console.log(data.msg)
                    navigate("/Dashboard/homepage");
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="row g-3 border " >
                < TextField
                    type="text"
                    name="username"
                    label="username"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    error={errors.username && touched.username}
                    onBlur={handleBlur}
                    helperText={errors.username && touched.username ? errors.username : ""}
                />

                < TextField
                    type="password"
                    name="password"
                    label="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    onBlur={handleBlur}
                    helperText={errors.password && touched.password ? errors.password : ""}
                />
                <Button type="submit" variant="outlined" >Login</Button>
                
            </form>
            {/* <Button type="button" onClick={()=>navigate("/registration")} variant="outlined">Register Now</Button> */}
        </div>
    )
}