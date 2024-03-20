import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-black bg-opacity-90 py-4 px-6 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100 hover:text-gray-400 transition duration-300">
          Ayush Jaiswal
        </h1>
        <div className="flex items-center space-x-6">
          <Link href="/">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              Resume
            </span>
          </Link>
          <Link href="/about">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              About
            </span>
          </Link>
          <Link href="/skills">
            <span className="text-white font-semibold hover:text-gray-400 transition duration-300">
              Skills
            </span>
          </Link>
          <Link href="/contact">
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
