import React from 'react';
import { SearchIcon, ChevronDownIcon, MenuIcon } from '@heroicons/react/solid';
import SubNavBar from './SubNavBar';

const NavBar = () => {
  return (
    <header className="bg-[#333545] body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className="h-10 w-32" src="/bookourshow-logo.png" alt="" />
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 bg-white w-[500px] rounded-md flex flex-wrap items-center text-base justify-center">
                <SearchIcon className="h-5 text-gray-400" />
                <input className="w-48 outline-none border-none flex-1 ml-1 text-gray-700" placeholder="Search movies" />
            </nav>
            <button className="inline-flex items-center border-0 py-1 px-3 text-gray-400 hover:text-gray-300 focus:outline-none rounded text-base mt-4 md:mt-0">
                Your City <ChevronDownIcon className="h-6" />
            </button>
            <button className="inline-flex items-center border-0 py-1 px-3 text-white bg-[#ed4163] focus:outline-none rounded text-base mt-4 md:mt-0">
                SignIn
            </button>
            <MenuIcon className="h-6 text-gray-100 ml-3 cursor-pointer" />
        </div>
        <SubNavBar />
    </header>
  )
}

export default NavBar;
