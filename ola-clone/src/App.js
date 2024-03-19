import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import  {useRef,useEffect,useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';
import mapboxIcon from './mapbox-icon.png';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Stack from '@mui/material';



mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function App() {
let defaultLocation= [21.1458, 79.0882 ] // {lat, long}
  const mapContainer = useRef(null);
  const map = useRef(null);

 const[startLocation,setStartLocation]=useState([]);
 const[endLocation,setEndLocation]= useState([]);
 const [zoom, setZoom] = useState(16);


const[basicFare,setBasicFare]=useState(0);
const[standardFare,setStandardFare]=useState(0);
const[premiumFare,setPremiumFare]=useState(0);


  function _suggestionStartSelect(result, lat, lng, text){
    console.log(result, lat, lng, text);
    setStartLocation([lat,lng]);

    //create a html element for each feature
    const el=document.createElement('div');
    el.className='marker';

    //make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat([lng,lat]).addTo(map.current);

    // move the map to seleted location

    map.current.flyTo({
      center: [lng, lat],
      essential: true , 
      zoom:16
    });


  }


function _suggestionEndSelect(result, lat, lng, text){
  console.log(result, lat, lng, text);
  setEndLocation([lat,lng]);

  //create a html element for each feature
  const el=document.createElement('div');
  el.className='marker';

  //make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat([lng,lat]).addTo(map.current);

  // move the map to seleted location

  map.current.flyTo({
    center: [lng, lat],
    essential: true , 
    zoom:11
    });


  }


    function hitApi(){
      console.log("hit api");

      const res = axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation[1]},${startLocation[0]};${endLocation[1]},${endLocation[0]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`) 
       .then(function (response){
        //handle success
        console.log("mapbox res: ", response);


        map.current.addSource('route',{
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties':{},
            'geometry':{
              'type':'LineString',
              'coordinates': response.data.routes[0]["geometry"]["coordinates"]
            }
          }
        });
        
          map.current.addLayer({
            'id': 'route',
           'type': 'line',
           'source': 'route',
           'layout':{
            'line-join':'round',
            'line-cap':'round'
           },

          'paint': {
            'line-color': '#888',
            'line-width': 8,
          
          }
        });

        //Find distance

        let distance=response.data.routes[0]["distance"]/1000; //kilometer

        setBasicFare(20 + (distance * 5)) // formula : basefare + distance * rate_per_km
        setStandardFare(100 + (distance * 7));
        setPremiumFare(150 + (distance * 10));

      });
      
      }

    useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [defaultLocation[1], defaultLocation[0 ]], //long,lat
      zoom:  zoom
    
    });

      // //create a html element for each feature
      // const el=document.createElement('div');
      // el.className='marker';

      // //make a marker for each feature and add to the map
      // new mapboxgl.Marker(el).setLngLat([lng,lat]).addTo(map.current);


  });

  
  return (
    <> 
     <Container>
        <Grid container margin={2}>
        <Grid item md={12}>
        <div>
        <div ref={mapContainer} className="map-container" />
         </div>
    </Grid>


<Grid item md={12} padding={3}>
          <MapboxAutocomplete
                publicKey={mapboxgl.accessToken}
                inputClass="form-control search"
                onSuggestionSelect={_suggestionStartSelect} 
                country="in" 
                style={{borderbottom:"2px solid black", color:'red'}}
                resetSearch={false}
                placeholder="&#x25FC;   Start Location">

                </MapboxAutocomplete>

                <MapboxAutocomplete
                publicKey={mapboxgl.accessToken}
                inputClass="form-control search"
                onSuggestionSelect={_suggestionEndSelect} 
                country="in" 
                style={{borderbottom:"2px solid black"}}
                resetSearch={false}
                placeholder="&#x25FC;   End Location">

                </MapboxAutocomplete>
                    
    <Button onClick={()=>{hitApi();}}>Find Route</Button>
    
    </Grid>

    <Grid container spacing={2}>
      <Grid item md={4}>
    <Box>
    <Card sx={{ minWidth: 275 }} margin={'2px'} padding={'3px'}>
            <CardContent style={{backgroundColor: "white"}}> 
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h5" component="div">
                {basicFare}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              </CardContent> 
              <CardActions>
                <Button size="small">Learn More</Button>
                  </CardActions>
                  </Card>
                  
            </Box>
          </Grid>


          <Grid item md={4}>
    <Box>
    <Card sx={{ minWidth: 275 }} margin={'2px'} padding={'3px'}>
            <CardContent style={{backgroundColor: "white"}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Standard
              </Typography>
              <Typography variant="h5" component="div">
                {standardFare}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                  </CardActions>
                  </Card>
            </Box>
          </Grid>


          <Grid item md={4}>
    <Box>
    <Card sx={{ minWidth: 275 }} margin={'2px'} padding={'3px'}>
            <CardContent style={{backgroundColor: "white"}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Premium
              </Typography>
              <Typography variant="h5" component="div">
                {premiumFare}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              </CardContent>
              
              <CardActions>
                <Button size="small">Learn More</Button>
                
                  </CardActions>
                  
                </Card> 
                
            </Box>
            
          </Grid>
    </Grid>
    </Grid>
    </Container>
    </>
  );
}

export default App;
