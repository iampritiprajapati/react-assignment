import {useState} from "react";
function Preeti4App(){
var a=30;
var b=45;
if(a<b){
    console.log("hi");
}
else
    {
        console.log("by");
    }
     return (
        <div className="App">
            {a}
            {a<b?  <>hi</>:<>by</>}
            {(a%2==0)?  <>even</>: <>odd</>}

        </div>
    )
}
export default Preeti4App;