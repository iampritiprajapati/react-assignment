import {useState} from "react";
function Preeti1App() {
  const[square,setSquare]=useState();
  const[nagpur,setNagpur]=useState();
  const[sum,setSum]=useState();
  const[sub,setSub]=useState();
  const[multi,setMulti]=useState();
    let a=32;
    function squareFunct(){
        console.log("sq is:",a*a)    
    }
    function nagpurFunct(){
        console.log("wel to nagpur");   
    }
    let b=23; let c=44;
      function sumFunct(){
        console.log("sum is:",b+c); 
      }
        function subFunct(){
        console.log("sub is:",c-b);   
    }
    function multiFunct(){
      console.log("multi is:",b*c); 
    }
    
    return (
      <div className="App">
        <h1>hi welcome to the react app</h1>
        square{square} <br/>
        <button onClick={()=>squareFunct()}>Click me</button> <br/>
       nagpur {nagpur} <br/>
        <button onClick={()=>nagpurFunct()}>Submit</button><br/>
        sum{sum} <br/>
        <button onClick={()=>sumFunct()}>On click</button><br/>
        sub{sub} <br/>
        <button onClick={()=>subFunct()}>login</button><br/>
        multi{multi} <br/>
        <button onClick={()=>multiFunct()}>log me</button><br/>
      </div>
    );
  }   
  export default Preeti1App;