import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Hello(){
 const[name,setName]=React.useState("Rahul");
 const[obj,setObj]=React.useState({"name":"Rahul"});
  return(
<>
{obj.name}
<button onClick={()=>{
   setName("john");
    obj.name="priti";

   // new object
   // {...}
    console.log({...obj})
    setObj({...obj})
}}>ClickHere</button>
</>
  );
}
export default Hello;


