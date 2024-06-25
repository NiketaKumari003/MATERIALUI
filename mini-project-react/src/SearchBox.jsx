import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/3.0/onecall"
    const API_KEY="f3459835be758fcaaf8a0b5f3146a878";


let getWeatherInfo= async ()=>{

   let response
   = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);


let jsonResponse=await response.json();
console.log(jsonResponse);



};






    
    let handleChange=(evt)=>{
setCity(evt.target.value);
    };
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city"
             label="City Name"
             variant="outlined" 
             required 
             ={city}
             onChange={handleChange}
              />
             <br></br>
             <br></br>
             <Button variant="contained" 
             type="submit">Search</Button>   
            </form>
        </div>
    )
}