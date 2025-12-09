
'use client';
import React from "react";
import Link from "next/link";
import { useRouter} from 'next/navigation';
export default function Home() {
  const router=useRouter();
  const navigate=(name)=>{
    router.push(name);

  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <MyName name="Ram" />
        <MyAge age={22} />
        <div className="mt-10 space-x-4">
          <Link
            href="/about"
            className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
          >
            About Page
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
          >
            Login Page
          </Link>
          <Link
            href="/event"
            className="rounded-lg bg-purple-500 px-4 py-2 font-medium text-white hover:bg-purple-600"
          >
            Event Page
          </Link>
        </div>  
        <button onClick={()=>navigate("/login")} className="mt-10 rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">navigation to login</button>

        
      </main>
    </div>
  );
}
const MyName=(props: { name: string })=>{
  return(
    <div>
    <h1>My name is:{props.name}</h1>
    </div>
  );
}
const MyAge=(props: {age:number})=>{
  return(
    <div>
    <h1>My age is:{props.age}</h1>
    </div>
  );
}