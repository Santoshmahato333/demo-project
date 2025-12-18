'use client';
import React from 'react';
import Location from '@/public/location';
import Script from 'next/script';

const GetUserLocations = () => {
  return (

    <div>
        <Script
        src="/location.tsx"
        onLoad={()=>{
            console.log("file loaded")
        }} />
        <h1>User Locations Page</h1>
        <p>This page provides information about user locations.</p>
        <Location />
    </div>
  );
};

export default GetUserLocations;