import {useState} from "react";
function Preeti3App(){ 
    const[data,setData]=useState();
    function getData(var1){
        console.log(var1.target.value);
        setData(var1.target.value)
    }
    
    return (
        <div classNmae="App">
            {data}
            {setData}
<input type="text" onChange={(e)=>getData(e)}/>


        </div>

    )

}
export default Preeti3App;