import React from 'react'
import Image from 'next/image';
import Profile from '../../public/vercel.svg';
const ProfileImages = () => {
  return (
    <div>
        <h1> Profile Image list</h1>
        <Image src="/profile1.jpg" alt="Profile 1" width={200} height={200} />
        <Image src="/profile2.jpg" alt="Profile 2" width={200} height={200} />
        <Image src="/profile3.jpg" alt="Profile 3" width={200} height={200} />
        <Image src={Profile} alt="Profile 4" width={200} height={200} />
        <button onClick={()=>alert("This is Profile Image Page")}>Click Me</button>
    </div>
  )
}

export default ProfileImages