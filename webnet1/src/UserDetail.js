import {useState} from "react";
import {Link,Outlet} from "react-router-dom";
import {useParams} from 'react-router-dom';

function UserDetail(){
// const[name,setName]=useState();
let {id}=useParams();
 
return  <div>

UserDetail{id}

</div>

}
export default UserDetail;