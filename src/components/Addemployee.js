// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../globel';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect} from 'react';
import "../App.css"
const FormValidationSchema  = yup.object({
    employee_name: yup.string().required("enter valid name"),
    gender: yup.string().required("enter valid text"),
    designation: yup.string().required("enter valid text").min(1),
    city: yup.string().required("enter valid text").min(5),
    id:yup.string().required("enter valid text").max(5),
})

export default function Addemployee() {
    const navigate = useNavigate();
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { employee_name: "", gender: "", designation: "", city: "",id:"" },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            Newemployee(values);
            console.log(values);
            navigate("/employeedata");
        },
    })
    const  Newemployee = (detail) => {
        console.log(detail);
        fetch(`${API}/reglog/employeedetails`,
        {
            method: "POST",
            body: JSON.stringify(detail),
            headers: { 'Content-Type': 'Application/json' }
        })
       
}

useEffect(() => Newemployee());



   
  return (
   <>
      <form onSubmit={handleSubmit}
            className="add-movie-form">
            < TextField type="text"
                name="employee_name"
                label="employee_name"
                variant="outlined"
                value={values.employee_name}
                onChange={handleChange}
                error={errors.employee_name && touched.employee_name }
                onBlur={handleBlur} 
                helperText={errors.employee_name && touched.employee_name ? errors.employee_name : ""}
                />
            
            <TextField type="text"
                name="gender"
                label="gender"
                variant="outlined"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.gender && touched.gender}
                helperText= {errors.gender && touched.gender ? errors.gender : ""}/>
           
            <TextField type="text"
                name="designation"                
                label="designation"
                variant="outlined"
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.designation && touched.designation} 
                helperText={errors.designation && touched.designation ? errors.designation : ""}/>
            
            <TextField type="text"
                name="city"
                label="city"
                variant="outlined"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur} 
                error={errors.city && touched.city }
                helperText= {errors.city && touched.city ? errors.city : ""}/>

                   
            <TextField type="text"
                name="id"
                label="id"
                variant="outlined"
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur} 
                error={errors.id && touched.id }
                helperText= {errors.id && touched.id ? errors.id : ""}/>
           

            
            <Button type="submit" variant="outlined" >Add Employee</Button>

        </form>
   </>
  )
}
