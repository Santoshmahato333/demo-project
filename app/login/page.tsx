'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
const LoginPage = () => {
    const router = useRouter();
    const navigate=(page:string)=>{
        router.push("/login/" + page);
    }
  return (
    <div>
        <h1 className='heading'>Login Page</h1>
        <button onClick={()=>navigate('/')}>Go to home</button>
        <button onClick={()=>navigate('loginStudent')}>Login as Student</button>
        <button onClick={()=>navigate('loginTeacher')}>Login as Teacher</button>
    </div>
  )
}

export default LoginPage