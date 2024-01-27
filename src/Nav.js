
import React from 'react'

const Nav = (props) => {
  return (
    <div className='flex justify-between p-6'>

       <div className='flex font-bold text-xl'>
        LOGO
        </div>  

        <div className='flex gap-5 font-bold text-xl '>
    <h1 className='hover:text-red-600'>{props.Home}</h1>
    <h1 className='hover:text-red-600'>{props.Services}</h1>
    <h1 className='hover:text-red-600'>{props.Contact}</h1>
    <h1 className='hover:text-red-600'>{props.Login}</h1>
</div>


    </div>
  )
}

export default Nav