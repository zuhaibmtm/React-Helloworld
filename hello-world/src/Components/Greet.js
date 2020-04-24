import React from 'react'

// function Greet (){

//     return <h1>Hello Zuhaib</h1>
// }

const Greet = props => 
{
return (
<div><h1>Hello {props.name}</h1> a,k,a <h1>{props.heroName}</h1>
{props.children}
</div>

)
}


 export default Greet
   
