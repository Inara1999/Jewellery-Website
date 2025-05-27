import React from 'react';

function Footer() {
  return (
    <div className='w-full h-auto bg-black  text-white px-10 pt-8'>
      <div className='flex flex-wrap justify-between items-start'>
        <div className='flex flex-col font-semibold text-[22px] space-y-2'>
          <h1>Stay in the loop with <br /> our latest listings</h1>
          <button className='flex justify-between items-center text-md mt-6 border border-white rounded-full w-[150px] h-9 text-left text-[14px] font-normal px-3'>
            Subscribe <i className="fa-regular fa-envelope ml-2" style={{ color: "#ffffff" }}></i>
          </button>
        </div>

        <div>
          <h1 className='font-bold mb-2'>Products</h1>
          <p>Earrings</p>
          <p>Rings</p>
          <p>Necklace</p>
        </div>

        <div>
          <h1 className='font-bold mb-2'>Company</h1>
          <p>Home</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>

        <div>
          <h1 className='font-bold mb-2'>Social</h1>
          <p>facebook</p>
          <p>insta</p>
          <p>twitter</p>
        </div>

        <div className='mt-4'>
          <button className='flex justify-between items-center border border-white rounded-full w-[110px] h-9 text-left text-[12px] px-2 font-normal'>
            Back to top <i className="fa-solid fa-arrow-up ml-2" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-500 my-4" />

      <div className='flex justify-between text-[14px] pb-4'>
        <p>© 2025 Jewellery</p>
        <p>Powered by Jewellery</p>
      </div>
    </div>
  );
}

export default Footer;
