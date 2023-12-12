import Button from './Button';
function Log(props){
    console.log("Hi welcome to the props drilling");
    console.log(props.age);
    console.log(props.name);
    console.log(props.city);
    console.log(props.state);
    console.log(props.gender);
 
    return <>
    <h1>Hello props drill</h1>
  <Button name={props.name} 
  age={props.age}
   city={props.city}
    state={props.state}
     gender={props.gender}/> <br/>
     
    </>
}
export default Log;