import {useEffect,useState} from "react";
function Preeti2App(){
  const[click1,setClick1]=useState();
  const[click2,setClick2]=useState();
useEffect(()=>{console.log("useEffect activated")},[click1])

useEffect(()=>{console.log("useEffect not activated")},[click2])

function clickHandle1(){
  setClick1("handle activated");
}
function clickHandle2(){
  setClick2("handle activated");
}
    return (
      <div className="App">
        <h1>Useeffect Handle Activation</h1>
        {click1} 
        <button onClick={clickHandle1}>Submit</button><br/> <br/>
        {click2}
        <button onClick={clickHandle2}>Login me</button>

      </div>
    );
  }   
  export default Preeti2App;