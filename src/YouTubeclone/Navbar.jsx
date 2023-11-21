import React from 'react'
import SearchBar from './SearchBar'
import logos from "../assets/youtube.png"
import Sidebar from './Sidebar'
const Navbar = () => {
    return (
        <div className='w-full h-auto bg-black text-white'>
            <div className='max-w-[1280px] h-auto mx-auto p-4 flex md:mr-8'>
                <div className='w-[400px] h-auto ' >
                    <img className="w-[100px] md:w-[100px] h-auto  " src={logos} alt='' />
                </div>
                <div className='flex  w-full justify-center items-center mr-10'>
                    <SearchBar />
                   
                </div>
            </div>

        </div>
    )
}

export default Navbar
// {/* <div className=' mx-auto items-center flex  '>
// {/* <input className='px-10 py-1 text-center border rounded-lg '
//     type='text' placeholder='search' /> */}
//     <SearchBar/>
// </div> */}
{/* <div className='w-full text-white h-auto  bg-black'>
<div className='max-w-[1280px] mx-auto p-2 h-auto flex '>
    <div className='md:ml-[100px] flex justify-center items-center'>
        <img className='md:w-[130px] w-[40px] h-auto' src={logos} alt='logo' />
    </div>
    <div className='px-[300px] flex justify-center items-center'>
        <input className='md:w-80 md:h-auto w-full h-auto p-2 border-2 rounded-full '
            type='text' placeholder='search' />
    </div>
    {/* <SearchBar /> */}
// </div>

// </div>
//  */}
