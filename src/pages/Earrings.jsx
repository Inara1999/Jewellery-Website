import React, { useState } from 'react';
import { earringData } from '../utilis/objectData/earringData';

function Earrings() {
  const [popularity, setpopularity] = useState(false);

  return (
    <div>
     <h1 className='font-extrabold flex justify-center items-center text-[40px] mt-[60px]'>Earrings</h1>
      <p className='font-normal flex justify-center items-center text-[18px] mt-[15px] mb-[40px]'>Home/Earrings</p>
    <div className='flex justify-center mb-[50px]'>
      <div className='bg-[#111111c4] w-[1100px] h-auto shadow-lg flex flex-col px-8 py-6'>

        {/* Top Bar */}
        <div className='flex items-center justify-between flex-wrap'>
          <button className="group border border-[#f7cc71] font-semibold w-[100px] h-[40px] rounded-[20px] hover:bg-yellow-600 hover:text-black flex items-center justify-center">
            <i className="fa-solid fa-sliders pr-2 text-white group-hover:text-black"></i>
            FILTER 
          </button>

          <p className='text-[14px] text-white mt-2 text-left mr-[620px] mb-2'>Showing all 5 results</p>

          <div className="relative mt-2">
            <button
              className='text-[14px] text-gray-300'
              onClick={() => setpopularity(!popularity)}
            >
              Sort by popularity <i className="fa-solid fa-angle-down text-white"></i>
            </button>

            {popularity && (
              <div className='absolute right-0 mt-2 w-48 bg-gray-800 shadow-md z-20 border border-white rounded-md'>
                <div className='flex flex-col'>
                  <button className='p-2 hover:bg-gray-700 text-left text-[12px]'>Sort by Popularity</button>
                  <button className='p-2 hover:bg-gray-700 text-left text-[12px]'>Sort by average rating</button>
                  <button className='p-2 hover:bg-gray-700 text-left text-[12px]'>Sort by latest</button>
                  <button className='p-2 hover:bg-gray-700 text-left text-[12px]'>Sort by price: low to high</button>
                  <button className='p-2 hover:bg-gray-700 text-left text-[12px]'>Sort by price: high to low</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Cards */}
        <div className='flex flex-wrap justify-between mt-6'>
          {earringData.map((item) => (
            <div
              key={item.id}
              className='w-[22%] bg-transparent rounded-md p-2 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1'
            >
              <div className="relative w-full h-[200px] group">
                {/* Hover Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-basket-shopping text-white bg-black p-1 rounded-full text-sm cursor-pointer"></i>
                  <i className="fa-solid fa-eye text-white bg-black p-1 rounded-full text-sm cursor-pointer"></i>
                </div>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>

              <p className='text-lg font-semibold text-white mt-2'>{item.type}</p>
              <p className='text-sm text-gray-300'>{item.title}</p>
              <div className='flex justify-between items-center mt-2'>
                <p className='text-sm line-through text-gray-500'>{item.oldPrice}</p>
                <p className='text-lg font-bold text-white'>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Earrings;
