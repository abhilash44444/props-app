import React from 'react';
import './style.css';
import Nav from './Nav';
import Home from './Home';

export default function App() {
  return (
    <div>
      <Nav Home='Home'  Contact='Contact' Services='Services' Login='Login' />
      <Home/>
      <h1 className='font-bold'> Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
