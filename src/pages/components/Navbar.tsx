import Link from 'next/link';


function Navbar () {
    return <>
        <div className="flex items-center justify-between bg-opacity-50 backdrop-filter backdrop-blur-lg bg-black-200 py-4 px-6 fixed top-0 w-full z-50">
        <div className="flex items-center justify-center">
            <h1 className="text-200 font-bold text-gray-1000 hover:text-gray-400">Ayush Jaiswal</h1>
        </div>
        <div className="flex items-center space-x-6">
            <a href="#" className="text-white-800 font-bold hover:text-gray-400 transition duration-300">Resume</a>
            <a href="#" className="text-white-800 font-bold hover:text-gray-400 transition duration-300">About</a>
            <a href="#" className="text-white-800 font-bold hover:text-gray-400 transition duration-300">Skills</a>
            <a href="#" className="text-white-800 font-bold hover:text-gray-400 transition duration-300">Contact</a>
        </div>
</div>

    </>
}


export default Navbar