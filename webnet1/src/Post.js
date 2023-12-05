import axios from 'axios';
import * as React  from 'react';
export default function Post(){
  const[title,setTitle]=React.useState();
  const[id,setId]=React.useState();
  const[config,setConfig]=React.useState();

function fetchData(){
    console.log("fetchData")
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
         console.log(res)
         console.log("config:-",res["config"]["adapter"])
         console.log("data:-",res["config"]["adapter"]["data"])
         console.log("env:-",res["config"]["env"])
         console.log ("title:-",res["data"]["title"])
         console.log("completed:-",res["data"]["completed"])
         console.log("headers:-",res["config"]["headers"])
         console.log("timeout:-",res["config"]["headers"]["timeout"])
         console.log("pragma",res["headers"]["pragma"])
         setTitle(res["data"]["title"]);
         setId(res["data"]["id"]);
         setConfig(res["config"]["adapter"]);
 })
}
      return(
        <> 
        Posts
        <button onClick={()=>{fetchData()}}>Fetch from API</button>
        Title:{title}   <br/>
        Id:{id}  <br/>
        Config:{config} <br/>
         </>
      );

      }
