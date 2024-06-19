import React from 'react';
const Navbar = () => {
  

  return (
    <nav className='flex justify-around bg-blue-900 text-white py-2'>
    <div className="logo">
        <span className='font-bold text-2xl sm:mx-9'>My-News</span>
    </div>
    <ul className="flex sm:gap-8 gap-3 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Contact</li>
       
    </ul>
    <div>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center me-2 mb-2"> Login</button>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:px-5 px-2 text-wrap py-2.5 text-center me-2 mb-2"> Sign up</button>
    </div>
   </nav>
  );
}

export default Navbar;
