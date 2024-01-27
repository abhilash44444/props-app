import React from 'react'
 
 const Home = (props) => {
   return (
     <div className='bg-lime-500 font-bold'>
       
        <h1 className='decoration-green-800'>this is a reactapp {props.name} {props.color}</h1>
         
     </div>
   )
 }
 
 export default Home