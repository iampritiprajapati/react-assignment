import {useState} from "react";
function Preeti5App(){
    const array=[3,35,6,65,23,54,75];
    for (var i=0; i<array.length; i++)
        {console.log(array[i]);
        }
        console.log("map method:");
        array.map((a)=>{console.log(a)})
        console.log("map method2");
        var sum=0;
        array.map((a)=>{sum=sum+a;})
        console.log("sum of all:",sum)
        const array2=[8,-35,-45,573,-12,34,57,-67,980];
        console.log("even no")
        array2.map((s)=>{if(s%2==0){
            console.log(s)
        }
    array2.map((s)=>{console.log(s)})
    {console.log(s)} 
    var sum=0;
    console.log("sum of all:",sum)
    })
return(
        <div className="App">
        {array.map((a)=>{return<>{a}</>})}

        </div>
    )
}
export default Preeti5App;