import * as React from 'react';
import Component1 from './Component3';
import UserContext from './Context';
export default function Button1(){
    return(
        <>
        <UserContext.Provider value={{name:"rahul", "age":30}}>
        Button1
        <Component1/>
        </UserContext.Provider>
        
        </>
    )
}