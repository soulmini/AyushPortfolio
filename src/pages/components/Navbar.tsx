import Link from 'next/link';
import { useEffect, useRef } from 'react';
import menu from '../../images/icons8-list-32.png';

function Navbar() {
  const res_bar = useRef(null);

  return (
    <div className="sm:block bg-black bg-opacity-90 bg- py-4 px-6 fixed top-0 w-full z-50">
      <div className="hidden sm:flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100 hover:text-gray-400 transition duration-300">
          <a href="/">AJ</a>
        </h1>
        <div className="flex items-center space-x-6">
          <Link href="#resume">
            <span className="text-white font-semibold hover:border-b border-dashed transition duration-300">
              Resume
            </span>
          </Link>
          <Link href="#about">
            <span className="text-white font-semibold hover:border-b border-dashed transition duration-300">
              About
            </span>
          </Link>
          <Link href="#skills">
            <span className="text-white font-semibold  hover:border-b border-dashed transition duration-300">
              Skills
            </span>
          </Link>
          <Link href="#contact">
            <span className="text-white font-semibold   hover:border-b border-dashed transition duration-300">
              Contact
            </span>
          </Link>
        </div>
      </div>
      {/* resp */}
      <div className='flex justify-between items-center sm:hidden'>
        <span className='font-medium text-3xl justify-end'>AJ</span>
        <div className="cursor-pointer text-xl" onClick={() => {
          res_bar.current.classList.toggle('hidden');
        }}>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div id='res_bar' className='hidden z-10 text-center sm:hidden' ref={res_bar}>
        <div className="flex flex-col gap-9 items-center justify-center space-x-6">
          <Link href="#resume">
            <span className="text-white font-semibold hover:text-gray-400 hover:translate-x-1 transition duration-300">
              Resume
            </span>
          </Link>
          <Link href="#about">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              About
            </span>
          </Link>
          <Link href="#skills">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              Skills
            </span>
          </Link>
          <Link href="#contact">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
