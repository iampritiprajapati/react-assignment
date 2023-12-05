import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 

function WeatherComponent(){
   // const[city,setCity]=React.useState([{"city":"Nagpur","temp":23,"wind":"21kmph"},{"city":"Delhi","temp":32,"wind":"11kmph"},{"city":"Pune","temp":45,"wind":"22kmph"},{"city":"Kerela","temp":23,"wind":"21kmph"},{"city":"Chennai","temp":23,"wind":"21kmph"},{"city":"Shimla","temp":23,"wind":"21kmph"}]);
   const[city,setCity]=React.useState(["Nagpur","Gondia","Delhi","Pune"]); 
   const[apidata,setApiData]=React.useState([]);

    function fetchAPI(){
      console.log("fetch api");
      city.map((val,index)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val},uk&APPID=024c2a5e2da48d81502b36c4b1561103&units=metric`)
        .then((res)=>{
         apidata.push(res.data);
          console.log("apidata",apidata);

          setApiData([...apidata]);
      })
     
      })}

  return ( <>
    <Button onClick={()=>{fetchAPI()}}>Fetch API: </Button>
    <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
            {apidata && apidata.name}
            </Typography>
            <Typography variant="h5" component="div">
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="Red">
            Temp:             {apidata && apidata.main.temp}
            </Typography>
            <Typography variant="body2">
            Humidity:   {apidata && apidata.main.humidity}
            <br /> <br />
            {'"Air quality is good"'}
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
            </Card>
    
           <Grid container spacing={3}>
           {apidata.map((val,index)=>{
            return <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
            City:{val.name}
            </Typography>

            <Typography variant="h5" component="div">
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="Red">
            Temp:{val["temp"]}
            </Typography>
            <Typography variant="body2">
            Wind:{val["wind"]}
            <br /> <br />
            {'"Air quality is good"'}
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
            </Card>
            </Grid>
           })};
           </Grid>     
    
    </>
       

);
}
export default WeatherComponent;