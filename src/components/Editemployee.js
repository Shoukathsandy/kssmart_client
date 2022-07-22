import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../globel';
export function Editemployee() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API}/reglog/${id}`)
      .then((data) => data.json())
      .then((users) => setEmployee(users))
  }, [id]
  );
  return (
    <div>
      {employee ? <Edit movie={movie} /> : "loading....."}
    </div>
  )

}

function Edit({ movie }) {
  const [employee_name, setEmployee_name] = useState(movie.employee_name);
  const [gender, setGender] = useState(movie.gender);
  const [designaton, setDesignaton] = useState(movie.designaton);
  const [city, setCity] = useState(movie.city);
  const [id, setId] = useState(movie.id);
  const navigate = useNavigate();


  const addmovie = () => {
    const newmovie = {
      employee_name: employee_name,
      gender: gender,
      designaton: designaton,
      city: city,
      id: id,
    };
    console.log(newmovie);
    // setMovielist([...movielist, newmovie]);
    //post method - fetch
    //1. method- POST
    //2.data- (newmovie) body: json.stringify
    //3. headers - json 
    fetch(`${API}/reglog/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(newmovie),
        headers: { 'Content-Type': 'Application/json' }
      })
      .then(() => navigate("/employeedata"));


  }

  return (

    <div className="add-movie-form">
      {/* this pre tag is using to print json  */}
      {/* <pre>{JSON.stringify(movie,null,2)}</pre>   */}
      < TextField type="text"
        id="outlined-basic"
        label="employee_name"
        variant="outlined"
        value={employee_name}
        onChange={(event) => setEmployee_name(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="gender"
        variant="outlined"
        value={gender}
        onChange={(event) => setGender(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="designation"
        variant="outlined"
        value={designation}
        onChange={(event) => setDesignaton(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="city"
        variant="outlined"
        value={city}
        onChange={(event) => setCity(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="id"
        variant="outlined"
        value={id}
        onChange={(event) => setId(event.target.value)} />

      <Button variant="outlined" onClick={addmovie}>Save details</Button>

    </div>
  );
}