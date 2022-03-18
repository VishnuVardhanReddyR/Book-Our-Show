import React from 'react';

const SubNavBar = () => {
  return (
    <header className="text-gray-300 bg-[#222539] body-font items-center">
      <div className="container p-4 flex flex-wrap flex-row items-center justify-between">
        <nav className="ml-5 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Movies</a>
          <div className="relative h-5 inline-flex cursor-pointer">
            <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Stream</a>
              <div className="absolute -top-2 right-2 text-[0.5rem] w-5 h-5 
                  text-[#db2b3c] rounded-full flex items-center justify-center">
                NEW
              </div>
          </div>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Events</a>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Plays</a>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Sports</a>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Activities</a>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Buzz</a>
        </nav>
        <nav className="flex flex-wrap items-center text-base justify-center">
        <div className="relative h-5 inline-flex cursor-pointer">
            <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">ListYourShow</a>
              <div className="absolute -top-2 right-2 text-[0.5rem] w-5 h-5 
                  text-[#db2b3c] rounded-full flex items-center justify-center">
                NEW
              </div>
          </div>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Corporates</a>
          <a className="mr-5 hover:text-gray-100 cursor-pointer text-sm">Offers</a>
          <a className="hover:text-gray-100 cursor-pointer text-sm">Gift Cards</a>
        </nav>
      </div>
    </header>
  )
}

export default SubNavBar;
