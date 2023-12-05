import {Link, Outlet} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from "axios";

function Weathercs(){
const[cities,setCities]=React.useState(["Nagpur","Pune","Mumbai","Nashik"]);
const[apidata,setApiData]=React.useState([]);

function fetchAPI(){
  console.log("fetch api");
  cities.map((val,index)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=ef41b243b93f48d8a2d65ff1e52561f5&units=metric`)
     .then((res)=>{
      apidata.push(res.data);
      console.log("apidata",apidata);
      setApiData([...apidata]);
    })
  })
}

  return <>
    <Button onClick={()=>{fetchAPI()}}>Fetch API:</Button>

    <Grid container spacing={2}>
     {apidata.map((val,index)=>{
      return <Grid item xs={4}>
        <CardContent>
            <Typography sx={{ fontSize: 18 }} color="blue" gutterBottom>
            {val.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
           Temp:{val.main.temp}
            </Typography>
            <Typography variant="body2">
            Humidity:{val.main.humidity}
            </Typography>
            </CardContent>
            <Card/>
          </Grid>;
})
 } </Grid>
      </> 
}
export default Weathercs;
    

