'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
const params = useParams();
  return (
    <div>
       <h1>Student details</h1>
        <li className='heading'>Welcome, {params.student}!</li>
    </div>
  )
}

export default Page