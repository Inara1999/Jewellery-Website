import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import { earringData } from '../utilis/objectData/earringData';

function Earrings() {
  const [popularity, setPopularity] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('All');
  const [priceMax, setPriceMax] = useState(null);
  const [sortOption, setSortOption] = useState('popularity'); // default sort option
  const [filteredData, setFilteredData] = useState(earringData);

  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    let filtered = earringData;

    if (selectedType !== 'All') {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    if (priceMax !== null) {
      filtered = filtered.filter((item) => item.price <= priceMax);
    }

    // Sorting logic
    switch (sortOption) {
      case 'popularity':
        filtered = filtered.slice().sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        break;
      case 'averageRating':
        filtered = filtered.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'latest':
        filtered = filtered.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'priceLowToHigh':
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  }, [selectedType, priceMax, sortOption]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        mainContentRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !mainContentRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const clearFilters = () => {
    setSelectedType('All');
    setPriceMax(null);
  };

  return (
    <div>
      <h1 className='font-extrabold flex justify-center items-center text-[40px] mt-[60px]'>Earrings</h1>
      <p className='font-normal flex justify-center items-center text-[18px] mt-[15px] mb-[40px]'>Home/Earrings</p>
      <div className='flex justify-center mb-[50px] relative'>

        {/* Sidebar */}
        {sidebarOpen && (
          <div ref={sidebarRef}>
            <Sidebar
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              filteredData={filteredData}
              clearFilters={clearFilters}
            />
          </div>
        )}

        {/* Main Content */}
        <div
          ref={mainContentRef}
          className={`bg-[#111111c4] w-[1100px] h-auto shadow-lg flex flex-col px-8 py-6 transition-all duration-300 ${
            sidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
          style={{
            filter: sidebarOpen ? 'blur(3px)' : 'none',
          }}
        >

          {/* Top Bar */}
          <div className='flex items-center justify-between flex-wrap'>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="group border border-[#f7cc71] font-semibold w-[100px] h-[40px] rounded-[20px] hover:bg-yellow-600 hover:text-black flex items-center justify-center"
            >
              <i className="fa-solid fa-sliders pr-2 text-white group-hover:text-black"></i>
              FILTER
            </button>

            <p className='text-[14px] text-white mt-2 text-left mr-[620px] mb-2'>
              Showing {filteredData.length} results
            </p>

            <div className="relative mt-2">
              <button
                className='text-[14px] text-gray-300'
                onClick={() => setPopularity(!popularity)}
              >
                Sort by <span className='capitalize'>{sortOption.replace(/([A-Z])/g, ' $1').toLowerCase()}</span> <i className="fa-solid fa-angle-down text-white"></i>
              </button>

              {popularity && (
                <div className='absolute right-0 mt-2 w-48 bg-gray-800 shadow-md z-20 border border-white rounded-md'>
                  <div className='flex flex-col'>
                    <button
                      className='p-2 hover:bg-gray-700 text-left text-[12px]'
                      onClick={() => {
                        setSortOption('popularity');
                        setPopularity(false);
                      }}
                    >
                      Sort by Popularity
                    </button>
                    <button
                      className='p-2 hover:bg-gray-700 text-left text-[12px]'
                      onClick={() => {
                        setSortOption('averageRating');
                        setPopularity(false);
                      }}
                    >
                      Sort by Average Rating
                    </button>
                    <button
                      className='p-2 hover:bg-gray-700 text-left text-[12px]'
                      onClick={() => {
                        setSortOption('latest');
                        setPopularity(false);
                      }}
                    >
                      Sort by Latest
                    </button>
                    <button
                      className='p-2 hover:bg-gray-700 text-left text-[12px]'
                      onClick={() => {
                        setSortOption('priceLowToHigh');
                        setPopularity(false);
                      }}
                    >
                      Sort by Price: Low to High
                    </button>
                    <button
                      className='p-2 hover:bg-gray-700 text-left text-[12px]'
                      onClick={() => {
                        setSortOption('priceHighToLow');
                        setPopularity(false);
                      }}
                    >
                      Sort by Price: High to Low
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Cards */}
          <div className='flex flex-wrap justify-between mt-6'>
            {filteredData.map((item) => (
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
                  <p className='text-lg font-bold text-white'>{item.price} Rs</p>
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
