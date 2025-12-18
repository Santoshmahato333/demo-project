'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Location = () => {
  const [locationData, setLocationData] = useState<string>('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setLocationData("Geolocation is not supported by this browser.");
    }
  };

  const success = (position: GeolocationPosition) => {
    setLocationData(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    );
  };

  const error = () => {
    setLocationData("Unable to retrieve your location.");
  };

  return (
    <div className={inter.className}>
      <h1>Geolocation Demo</h1>
      <button onClick={getLocation}>Get My Location</button>
      {locationData && <p>{locationData}</p>}
    </div>
  );
};

export default Location;