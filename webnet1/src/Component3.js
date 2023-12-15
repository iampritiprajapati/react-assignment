import * as React from 'react';
import UserContext from 'Context';
import Component4 from './Component4';
import {UseContext} from './react';
export default function Component2(){
const dataFromParent=useContext(UserContext);
    return(
        <>
        Component3{dataFromParent.name} {dataFromParent.age}
        <Component4/> 
        </>
    )
}