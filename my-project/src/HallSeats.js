import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovieList from './MovieList';

const Item = styled(Paper)(({ theme }) =>({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow(props) {
  console.log(props.selectedSeat);

   function bookSeat(currentItem){
  const newArray=props.seats.map((originalRow,index1)=>{
    return originalRow.map((originalItem,index2)=>{
      if(originalItem.row === currentItem.row && originalItem.column === currentItem.column && currentItem.bookedBy !=="other"){
        if(originalItem.booked){
          console.log("user don't want to book this");
          //remove from selected array
          originalItem.booked = false;

          //0
          let newArray=[];
          console.log("user clicked on",currentItem.row, currentItem.column);

          let totalAmount = 0;
          for(let i=0; i < props.selectedSeat.length; i++){
            console.log("inner",props.selectedSeat[i]);
            if(currentItem.row === props.selectedSeat[i]["row"] && currentItem.column === props.selectedSeat[i]["column"]){
              console.log("matched", currentItem.row, currentItem.column);
            }
            else {
              console.log("not matched", currentItem.row, currentItem.column);
              newArray.push(props.selectedSeat[i]);
              totalAmount=totalAmount + props.selectedSeat[i]["price"]
            }
          }

          props.setTotalAmount(totalAmount);
          props.setSelectedSeat(newArray);
          console.log("newArray",newArray);
        }
        else{
          console.log("user want to book this");
          // addinto selectedSeat array
          props.selectedSeat.push(originalItem);
          props.setTotalAmount(props.totalAmount + originalItem.price);
          props.setSelectedSeat([...props.selectedSeat]);
          originalItem.booked=true;
        }
        }
        return originalItem;
    })
  });

  props.setSeats(newArray);
}

  return (
    <React.Fragment>
        {props.row.map((val,index)=>{
            return <Grid key={"row-grid"+index} item xs={1}>
            <Item onClick={()=>{bookSeat(val)}} style={{backgroundColor: val.booked===true? "red":"green"}}> {val.row} {val.column} {val.booked===true? "Booked":"Available"}</Item>
          </Grid>
        })}
    </React.Fragment>
  );
    
};

//parent
export default function HallSeats() {
  //add  in states
const [selectedSeat,setSelectedSeat]=React.useState([]);
const[totalAmount,setTotalAmount]=React.useState(0);

const[seats,setSeats]=React.useState([
  [
   {"row":"A","column":1,"price":200,"booked":false},
   {"row":"A","column":2,"price":200,"booked":true, "bookedBy":"other"},
   {"row":"A","column":3,"price":200,"booked":true, "bookedBy":"other"},
   {"row":"A","column":4,"price":200,"booked":false},
   {"row":"A","column":5,"price":200,"booked":false},
   {"row":"A","column":6,"price":200,"booked":true, "bookedBy":"other"},
   {"row":"A","column":7,"price":200,"booked":true, "bookedBy":"other"},
   {"row":"A","column":8,"price":200,"booked":true, "bookedBy":"other"}],
  
[ {"row":"B","column":1,"price":200,"booked":true, "bookedBy":"other"},
  {"row":"B","column":2,"price":200,"booked":false},
  {"row":"B","column":3,"price":200,"booked":false},
  {"row":"B","column":4,"price":200,"booked":false},
  {"row":"B","column":5,"price":200,"booked":false},
  {"row":"B","column":6,"price":200,"booked":false},
  {"row":"B","column":7,"price":200,"booked":false},
  {"row":"B","column":8,"price":200,"booked":false}],
  
[ {"row":"C","column":1,"price":200,"booked":true, "bookedBy":"other"},
  {"row":"C","column":2,"price":200,"booked":false},
  {"row":"C","column":3,"price":200,"booked":false},
  {"row":"C","column":4,"price":200,"booked":false},
  {"row":"C","column":5,"price":200,"booked":false},
  {"row":"C","column":6,"price":200,"booked":false},
  {"row":"C","column":7,"price":200,"booked":false},
  {"row":"C","column":8,"price":200,"booked":false}],
]);

  return (<>
    
      <MovieList/>

          <Box sx={{ margin :10}}>
          <Grid container>
            <Grid xs={10}>
            {seats.map((val,index)=>{
              return <Grid key={"grid-"+index} container spacing={2} minHeight={160}>
                <FormRow row={val} seats={seats} setSeats={setSeats} setSelectedSeat={setSelectedSeat} selectedSeat={selectedSeat} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
              </Grid>
          })}

        </Grid>

        <Grid xs={2}>
              <Card sx={{ minWidth:275}}>
            <CardContent>

          <Typography variant="h5" component="div">
            BOOKING SUMMERY
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Seats
            </Typography>

            <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
            {selectedSeat.map((selectedSeat)=>{
              return selectedSeat.row + selectedSeat.column + " ";
            })}
            </Typography>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Original Amount:
              {totalAmount}
            </Typography>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total Amount (18% GST):
              {totalAmount + ((totalAmount * 18)/100)}
           </Typography>
          
          <CardActions>
              <Button size="small">Proced</Button>
            </CardActions>
          </CardContent> 
      </Card>
      </Grid>
     </Grid>
    </Box>
</>
  );
 }   