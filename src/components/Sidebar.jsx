import React, { useState, useEffect } from 'react';

const Sidebar = ({
  selectedType,
  setSelectedType,
  priceMax,
  setPriceMax,
  filteredData, // receive filtered data from Store for preview
  clearFilters,
}) => {
  const [inputPrice, setInputPrice] = useState(priceMax === null ? 2000 : priceMax);

  useEffect(() => {
    setInputPrice(priceMax === null ? 2000 : priceMax);
  }, [priceMax]);

  const handleTypeChange = (e) => setSelectedType(e.target.value);

  const handleSliderChange = (e) => {
    const val = e.target.value;
    setInputPrice(Number(val));
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setInputPrice(val === '' ? '' : Number(val));
    }
  };

  const applyFilter = () => {
    setPriceMax(inputPrice === '' ? null : inputPrice);
  };

  return (
    <div
      className="fixed top-0 left-0 h-full bg-[#111111d8]  text-white shadow-lg z-50 p-6 overflow-y-auto"
      style={{ width: 400, paddingTop: 80 }}
    >
      <h3 className="font-bold text-xl mb-6">Filters</h3>

      {/* Filter by Product Type */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold" htmlFor="type">
          Product Type
        </label>
        <select
          id="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="bg-gray-700 rounded px-3 py-2 w-[200px]"
        >
          <option value="All">All</option>
          <option value="Earrings">Earrings</option>
          <option value="Rings">Rings</option>
          <option value="Pendent">Pendent</option>
        </select>
      </div>

      {/* Price Range Slider */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Max Price</label>
        <input
          type="range"
          min={0}
          max={2000}
          step={50}
          value={inputPrice === '' ? 2000 : inputPrice}
          onChange={handleSliderChange}
          className="w-[200px]"
        />
        <p className="mt-2 text-sm">
          Up to: <span className="font-bold">{inputPrice === '' ? "2000" : `${inputPrice}`} Rs</span>
        </p>
      </div>

      {/* Manual Price Input + Filter Button */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={inputPrice}
          onChange={handleInputChange}
          placeholder="Enter max price"
          className="flex px-3 py-2 rounded-full bg-[#11111193]  text-white focus:outline-yellow-400 h-[40px] w-[200px] border border-gray-600"
        />
        <button
          onClick={applyFilter}
          className="border border-[#f7cc71] font-normal text-sm w-[100px] h-[40px] rounded-full hover:bg-yellow-600 hover:text-black flex items-center justify-center"

        >
          Filter
        </button>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="mb-6 border border-[#f7cc71] font-normal text-sm w-[100px] h-[40px] rounded-full hover:bg-yellow-600 hover:text-black flex items-center justify-center"
      >
        Clear Filters
      </button>

      {/* Filtered Products Preview */}
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Matching Products</h4>
        {filteredData.length > 0 ? (
          <div className="space-y-4 ">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 items-start border-b border-gray-700 pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-300">{item.price} Rs</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-red-400 mt-2">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
