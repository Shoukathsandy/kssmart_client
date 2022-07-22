import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './globel';

const FormValidationSchema = yup.object({
   
    username: yup.string().required("enter valid text").min(1),
    password: yup.string().required("enter valid password"),
   
});

// import Typography from '@mui/material/Typography';


// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

// const card = (
//     <React.Fragment>
//         <CardContent className="layout">
//             {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 Word of the Day
//             </Typography>
//             <Typography variant="h5" component="div">
//                 be{bull}nev{bull}o{bull}lent
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 adjective
//             </Typography>
//             <Typography variant="body2">
//                 well meaning and kindly.
//                 <br />
//                 {'"a benevolent smile"'}
//             </Typography> */}
//         </CardContent>
//         <CardActions>
//             <Button size="small">Register now</Button>
//         </CardActions>
//     </React.Fragment>
// );





// export  function Registration() {
//     return (
//         <Box sx={{ minWidth: 275 }}>
//             <Card variant="outlined">{card}</Card>
//         </Box>
//     )
// };

export function Registration() {
    const navigate = useNavigate();
    const {handleSubmit,handleChange,handleBlur,values,errors,touched}= useFormik({
        initialValues:{ 
          
          
            username:"",
            password:"",
        
          },
            validationSchema: FormValidationSchema,
            onSubmit:(values)=>{
                Link(values);
                console.log(values);
            }
    });

    const Link = (linking)=>{
        // console.log(linking);
            fetch(`${API}/reglog/register`,
                {
                    method: "POST",
                    body: JSON.stringify(linking),
                    headers: { 'Content-Type': 'Application/json' }
                })
                .then((response)=>response.json())
                .then((data) => {if(data.error)
                {
                    console.log(data.error)
                }else{
                    console.log(data.msg);
                    navigate("/login");
                }});
            
    }
    return (
        <form onSubmit={handleSubmit} className="row g-3 border " >
      

            < TextField
                type="text"
                name="username"
                label="username"
                variant="outlined"
                value={values.email}
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

      
            <Button type="submit" variant="outlined" >Register now</Button>
         
        </form>
    );
};