'use client';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import React from 'react'

const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => router.push('/')}>Go to Home</button>
        </div>
    )
}

export default About;