import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const rows=["A","B","C","D","E"];
const columns=[1,2,3,4,5,6,7,8];
function FormRow(props) {
    console.log(props.row);
  return (
    <React.Fragment>
        {columns.map((val,index)=>{
            return<Grid item xs={1}>
            <Item>{props.row}{val}</Item>
          </Grid>
        })}
    </React.Fragment>
  );
}

export default function HallSeats() {
  return (
    <Box sx={{ flexGrow: 2 }}>
        <Grid container item spacing={4}>
        {rows.map((val,index)=>{
            return <Grid container item spacing={6}>
              <FormRow row={val}/>
            </Grid>
        })}
      </Grid>
    </Box>
  );
}