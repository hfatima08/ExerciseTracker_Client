import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#743A98]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
    
        <span class="relative block px-8 py-3 text-black border border-current bg-white">
          <Link to="/home">Go Home</Link>
        </span>
    </button>
</main> 
    </>
  )
}
