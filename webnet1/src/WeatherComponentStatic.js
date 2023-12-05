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
    const[cities,setCities]=React.useState([{"city":"Nagpur","temp":23,"wind":"21kmph"},{"city":"Delhi","temp":32,"wind":"11kmph"},{"city":"Pune","temp":45,"wind":"22kmph"},{"city":"Kerela","temp":23,"wind":"21kmph"},{"city":"Chennai","temp":23,"wind":"21kmph"},{"city":"Shimla","temp":23,"wind":"21kmph"}]);
    const[city,setCity]=React.useState();
    const[temp,setTemp]=React.useState();
    const[wind,setWind]=React.useState();
    return <>
    <Box component="form"
    sx={{'&>:not(style)':{m:1,width:'25ch'},
  }}
   noValidate
   autoComplete="off"
   >
    <TextField id="filled-basic" label="City" onChange={(e)=>{setCity(e.target.value)}} varient="filled"/>
    <TextField id="filled-basic" label="Temp" onChange={(e)=>{setTemp(e.target.value)}} varient="filled"/>
    <TextField id="filled-basic" label="Wind" onChange={(e)=>{setWind(e.target.value)}} varient="filled"/>
    <Button varient="contained" onClick={()=>{
      console.log("clicked");
      console.log(city,temp,wind);

      cities.push({"city":city,"temp":temp,"wind":wind});
      setCities([...cities]);

    }}>Add</Button>
           </Box>    

           <Grid container spacing={3}>
              {cities.map((val,index)=>{
                return <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="purple" gutterBottom>
                Cities:{val["city"]}
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
       
}
export default WeatherComponent;