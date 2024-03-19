import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import MovieRating from './Rating';
import {Link} from 'react-router-dom';



const MovieList=()=>{

    const[nameofmovies,setNameofMovies]=React.useState();
    const[imageURL,setImageURL]=React.useState();

    function addMovie() {
    movies.push({name:nameofmovies, image:imageURL});
    setMovies([...movies]);
}

   const[movies,setMovies]=React.useState([{name:"Animal", image:"https://content.tupaki.com/en/feeds/2023/12/01/212181-animal.webp", desc:"A son undergoes a remarkable transformation as the bond with his father begins to fracture, and he becomes consumed by a quest for vengeance."},{name:"Dunki", image:"https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/12/Dunki.jpg", desc:"Four friends from a village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier promises to take them to the land of their dreams."}]);

   return(
    <>
    <div >
        <Stack direction="row" spacing={2}>
            <Button variant="contained">
              Name of movies:<input type="text" onChange={(e)=>{setNameofMovies(e.target.value)}}/>
              </Button>
              <Button variant="contained">
              Image URL:<input type="text" onChange={(e)=>{setImageURL(e.target.value)}}/>
              </Button>
            <button onClick={()=>{addMovie();}}>ADD</button>
        </Stack>
    </div>


    
<Stack direction="row" spacing={2} style={{margin: "50px"}}>
  {movies.map((val,index)=>{
    return <Card sx={{ maxWidth: 300 }}>
          <CardMedia
              component="img"
              alt="Movies"
              height="140"
              image={val.image}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {val.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.desc}
              </Typography>
          </CardContent>
           <CardActions>
              <MovieRating />
              <br />
              <Button size="small">Share</Button>
              <Button size="small"> <Link to={`/movie/`+ val.name}>Learn More</Link> </Button>
          </CardActions>
          </Card>
       
    
 })}

  </Stack>

</>

)
};
  export default MovieList;