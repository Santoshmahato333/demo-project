'use client';
import Link from 'next/link';
import React from 'react'
import './login.css';
import { usePathname } from 'next/navigation';
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname= usePathname();
  if(pathname=="/login"){
    return <>{children}</>;
  }

  return (
    <div className="login-menu">
        <ul>
          <li>
            <h4>Login Menu</h4>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/login/loginStudent">Student</Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">Teacher</Link>
          </li>
        </ul>
        {children}
    </div>
  )
}

export default CommonLayout;
