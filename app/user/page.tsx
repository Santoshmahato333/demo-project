'use client';
import { useState } from 'react';
import React from 'react'

const Users = () => {
    const [h3Style, seth3Style]=useState({backgroundColor:'Yellow'});
  return (
    <div>
        <h1 style={{backgroundColor:"green"}}>User Page</h1>
        <h2>Welcome to the User Page!</h2>
        <h3 style={h3Style}>Explore user details and more.</h3>
        <button onClick={()=>seth3Style({backgroundColor:'Red'})}>Click Me</button>
    </div>
  )
}

export default Users;
// export const generateMetadata = () => {
//     return {
//         title: 'User Page',
//         description: 'This is the user page description',
//     };
// }   