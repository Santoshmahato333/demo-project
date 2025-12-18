import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            <li>
                <Link href="/studentlist/ram">Ram</Link>
            </li>
            <li>
                <Link href="/studentlist/shyam">Shyam</Link>
            </li>
            <li>
                <Link href="/studentlist/ghanshyam">Ghanshyam</Link>
            </li>  
            
            <li>
                <Link href="/">Go to Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList
export const generateMetadata = () => {
    return {
        title: 'Student List Page',
        description: 'This is the student list page description',
    };
}