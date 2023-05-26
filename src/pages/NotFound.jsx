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
      <div
        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 text-black border border-current">
          <Link to="/home">Go Home</Link>
        </span>
      </div>
    </button>
</main> 
    </>
  )
}