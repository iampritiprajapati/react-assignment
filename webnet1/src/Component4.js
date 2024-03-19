import * as React from 'react';
import { useContext } from 'react';
import UserContext from "./Context";

export default function Component4(){
  const dataFromParent=useContext(UserContext);
    return (  
       <>
          Component4 {dataFromParent.name} {dataFromParent.age}
      </>
    );
}
