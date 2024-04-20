"use client"

import React, { useState, useCallback } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useStore from '@/app/utils/store';


export default function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  const toggleMenu = useCallback(
    () => {
      setMenu((prev) => !prev)
    },
    [setMenu]
  );

  const handleLogin = () => {
    alert("tidak bisa ke halaman login, tolong Log Out terlebih dahulu..!!")
  }
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    setLoggedIn(false); // Set isLoggedIn menjadi false di store
    router.push('/login'); // Arahkan pengguna kembali ke halaman login
  };

  return (
    <header className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <h1 className="text-xl text-slate-800 font-bold">Jadoo App</h1>
        </div>

        <button
          className={['w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50', menu ? "text-white fixed right-4" : "relative text-inherit"].join(" ")}
          onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {menu ? "close" : "menu"}
          </span>
        </button>
        <div className={['lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20', menu ? "flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black" : "hidden opacity-0 h-0 invisible"].join(" ")}>
          <ul className='flex flex-col lg:flex-row lg:flex items-center gap-y-10'>
            <li className=''>
              <Link href='/' className='px-9 text-slate-200 lg:text-gray-800'>Destinations</Link>
            </li>
            <li className=''>
              <Link href='/' className='px-9 text-slate-200 lg:text-gray-800'>Hotels</Link>
            </li>
            <li className=''>
              <Link href='/' className='px-9 text-slate-200 lg:text-gray-800'>Flights</Link>
            </li>
            <li className=''>
              <Link href='/' className='px-9 text-slate-200 lg:text-gray-800'>Bookings</Link>
            </li>
            <li className=''>
              <Link href='/' onClick={handleLogin} className='px-9 text-slate-200 lg:text-gray-800'>Login</Link>
            </li>
            <li className=''>
              <button onClick={handleLogout} className='px-5 text-slate-200 lg:text-gray-800 py-1 border border-gray-800 rounded-md mx-3'>Log Out</button>
            </li>
            <li className=''>
              <button href='/' className='px-9 text-slate-200 lg:text-gray-800'>
                EN
                <span className='absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2'></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
