import * as React from 'react';
import Comp1 from './Comp1';

 export default function Button(props){
    return (
    <> 
  Button{props.name}
  {props.age}
  {props.city}
  {props.state}
  {props.gender}
  <Comp1 name={props.name} 
  age={props.age} 
  city={props.city}
  state={props.state}
  gender={props.gender}
   />
    </>
    );
}
