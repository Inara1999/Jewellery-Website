import React from 'react';
import Ring from '../assets/images/Ring.png'
import Necklace from '../assets/images/Necklace.png'
import Earrings from '../assets/images/Earrings.png'
import MaleRing from '../assets/images/MaleRing.png'
import Women from '../assets/images/Women.png'

function Home() {
  return (
    <div>
    <div className='flex justify-center items-center min-h-screen '>
    {/* main div */}
      <div
        className='flex justify-center w-[1100px] h-[600px] mt-4 shadow-lg'
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbG7K1pJl5FZfzT-uhRJT7c9fVjcX5X7pb6k6R2UzQ49tlVTk8VeJCSvM&s')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex  justify-between px-6 py-[130px]'>
          <div className='w-[40%] '>
            <img
              src={Ring}
              alt='Rings'
              className='w-[350px] h-[300px] rounded'
            />
          </div>
          <div className='w-[60%]  text-white py-[60px] '>
            <h1 className='text-[30px] font-extrabold ml-12'>Him & Her</h1>
            <h2 className= ' text-[26px] font-bold mt-4 ml-12'>Love Collection</h2>
            <p className='text-[18px] mt-4 ml-12'>Exclusive diamond rings for couples and lovers.</p>
            <button className='ml-12 mt-10 border border-yellow-600 rounded-full w-[130px] h-[50px] text-sm hover:bg-yellow-600'>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
    {/* 1 div */}
    <div className='flex justify-between mt-12'>
      <div className='bg-[#242121] w-[300px] h-[400px] ml-[118px] flex flex-col p-4 '>
        <h1 className='text-white text-center font-bold text-[20px] p-2'>Necklace with Diamond Pendant</h1>
        <p className='text-center font-normal text-[14px] p-2'>Lorem ipsum dolor sit amet, adipiscing elit</p>
        <button className='border border-yellow-600 rounded-full w-[130px] h-[50px] text-sm hover:bg-yellow-600 self-center'>$200 - BUY NOW</button>
        <img src={Necklace} alt='Necklace' className='w-auto h-48 object-contain mt-'/>
      </div>
      <div className='bg-[#242121] w-[600px] h-[400px] mr-[118px] flex justify-center items-center'>
        <div className='w-[40%]'>
        <img src={Earrings} className='w-[250px] h-[200px] rounded item-center'/>
        </div>
        <div className='w-[60%]  text-white py-[160px] '>
            <h1 className='text-[30px] font-extrabold ml-12'>Give Her the Best Thing She Deserves</h1>
            <button className='ml-12 mt-10 border border-yellow-600 rounded-full w-[130px] h-[50px] text-sm hover:bg-yellow-600'>SHOP NOW</button>
          </div>
      </div>
    </div>

    {/* div 2 */}
    <div className='flex justify-between mt-12'>
    <div className='bg-[#242121] w-[600px] h-[400px] ml-[118px] flex justify-center items-center'>
        <div className='w-[60%]  text-white py-[160px] '>
            <h1 className='text-[30px] font-extrabold ml-12'>For Him</h1>
            <p className='ml-12 mt-3'>Exclusive diamond rings for gold loving men</p>
            <button className='ml-12 mt-10 border border-yellow-600 rounded-full w-[130px] h-[50px] text-sm hover:bg-yellow-600'>SHOP NOW</button>
          </div>
        <div className='w-[40%]'>
        <img src={MaleRing} className='w-[200px] h-[200px] rounded item-center'/>
        </div>
      </div>
      <div
  className="bg-[#242121] w-[300px] h-[400px] mr-[118px] flex flex-col bg-cover  relative text-white p-4"
  style={{ backgroundImage: `url(${Women})` }}
>
   <div className=" p-2 rounded flex flex-col h-full">
    <h1 className="text-center font-bold text-[20px]">
      Everything You Need For The Best Look You Wish
    </h1>
    
    <button className="mt-auto mx-auto border border-yellow-600 rounded-full w-[130px] h-[50px] text-sm hover:bg-yellow-600">
      $200 - BUY NOW
    </button>
   </div>
   </div>

    </div>
    {/* banner */}
    <div className='flex flex-wrap h-[200px] bg-[#f7cc71] mt-10 mx-28 p-4 gap-4 items-center'>
  <h1 className='w-[350px] font-bold text-[30px] text-left text-black  ml-8'>
    Golden Citizen Membership
  </h1>

  <p className='text-black w-[300px] text-left font-bold text-[20px] ml-[180px]'>
    Plus 5% Rewards and Free Shipping
  </p>

  <button className='w-[150px] h-[50px] bg-black text-white font-semibold mt-2 rounded-full ml-4 hover:bg-white hover:text-black'>
    JOIN TODAY
  </button>
</div>   
    </div>
  );
}

export default Home;
