import axios from 'axios';
import * as React from 'react';
import {useParams} from 'react-router-dom';

function Object(){
    let Param=useParams();
const[data,setData]=React.useState({});
 let obj={};
  obj.name="John";
  obj["age"]=24;
  console.log(obj);
 
  function fetchData(){
    data.name="John";
    data.age=25;
    setData({...data});

    console.log("fetch data");
    axios.get(`https://jsonplaceholder.typicode.com/to dos/${Param.userid}`)
    .then((res)=>{console.log(res)
    console.log("status",res["status"])
    console.log("title",res["data"]["title"])
    data.title=res["data"]["title"]
    data.id=res["data"]["id"];
    data.completed=res["data"]["copmpleted"]?
    "YES:NO":
    setData({...data});
})
 return(
    <>   Post
    <button onClick={()=>{fetchData()}}>Fetch from API:</button>
    {data.title}
    {data.id}
    {data.completed}   
    </>
 );
  }
}
export default Object;