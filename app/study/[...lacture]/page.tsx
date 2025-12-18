'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const Lecture = () => {
  const params = useParams();
  const lecture = params?.lacture as string[] | undefined;

  console.log("params:", params);
  console.log("lecture:", lecture);

  // Guard: prevent crash
  if (!lecture || lecture.length === 0) {
    return <div>No lecture data provided.</div>;
  }

  return (
    <div>
      <h1>Lecture: {lecture[0]}</h1>
      <p>This is the content for lecture: {lecture[1] ?? "No second value"}.</p>
    </div>
  );
};

export default Lecture;
