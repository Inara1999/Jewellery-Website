import React, { useEffect, useRef } from 'react'
import About from '../assets/images/About.jpg'
import background from '../assets/images/background.jpeg'
import logo1 from '../assets/images/logo/logo1.png'
import logo2 from '../assets/images/logo/logo2.png'
import logo3 from '../assets/images/logo/logo3.png'
import logo4 from '../assets/images/logo/logo4.png'
import aboutus from '../assets/video/aboutus.mp4'

function Aboutus() {
  const videoRef = useRef(null); // changed variable name to avoid shadowing

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return; // safety check

    const loopVideo = () => {
      if (videoElement.currentTime >= 31) {
        videoElement.currentTime = 0;
        videoElement.play();  // Correct method to start video
      }
    };

    videoElement.addEventListener('timeupdate', loopVideo);

    return () => {
      videoElement.removeEventListener('timeupdate', loopVideo);
    };
  }, []);

  return (
    <div>
      {/* 1 div */}
      <div className='h-[600px] flex justify-center mt-8 relative'>
        <div
          className='absolute w-[1100px] h-[600px] flex justify-center opacity-[0.45]'
          style={{
            backgroundImage: `url(${About})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='relative flex flex-col text-left w-1/3 h-[300px] ml-[450px] mt-[120px]'>
          <h1 className='font-bold text-[28px] pl-4'>About Us</h1>
          <h1 className='font-bold text-[52px] pl-4'>A Heritage Of Four Generations</h1>
          <hr className='border border-yellow-500 w-[150px] ml-5 mt-5' />
          <p className='text-[18px] ml-5 mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* 2nd div */}
      <div>
        <div className='h-[600px] flex justify-center relative'>
          <div className='absolute w-[1100px] h-[600px] flex justify-center opacity-[0.78]'>
            <img
              src='https://instoremag.com/wp-content/uploads/2025/04/iStock-2039688727-min-400x240.jpg'
              className='w-[1100px] bg-cover bg-no-repeat object-cover'
              alt='background'
            />
          </div>
          <div className='relative flex flex-col text-left w-1/2 h-[300px] mr-[300px] mt-[120px]'>
            <h1 className='font-bold text-[28px] '>History</h1>
            <h1 className='font-bold text-[52px] mt-4'>Established In 1918</h1>
            <p className='text-[18px] mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitelit tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd div */}
      <div className='flex justify-center'>
        <div
          className='w-[1100px] h-[400px] shadow-lg flex flex-col items-center justify-center'
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <h1 className='flex justify-center items-center font-bold text-[38px] mt-[70px]'>Our Partners</h1>
            <div className='w-[600px] flex flex-row justify-center items-center gap-4 mt-6'>
              <img src={logo1} alt='partner-1' className='w-[250px] h-[150px] object-contain' />
              <img src={logo2} alt='partner-2' className='w-[250px] h-[150px] object-contain' />
              <img src={logo3} alt='partner-3' className='w-[250px] h-[150px] object-contain' />
              <img src={logo4} alt='partner-4' className='w-[250px] h-[150px] object-contain' />
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className='flex flex-wrap w-[1100px] h-[200px] bg-[#f7cc71] mx-auto p-4 gap-4 items-center'>
        <h1 className='w-[350px] font-bold text-[30px] text-left text-black ml-8'>Golden Citizen Membership</h1>

        <p className='text-black w-[300px] text-left font-bold text-[20px] ml-[180px]'>
          Plus 5% Rewards and Free Shipping
        </p>

        <button className='w-[150px] h-[50px] bg-black text-white font-semibold mt-2 rounded-full ml-4 hover:bg-white hover:text-black'>
          JOIN TODAY
        </button>
      </div>

      {/* 4th div */}
      <div className='flex justify-center mb-6'>
        <div className='w-[1100px] h-[450px] relative overflow-hidden shadow-2xl rounded-lg'>
          {/* Background Video */}
          <div className='absolute inset-0 z-0'>
            <video
              autoPlay
              muted
              ref={videoRef}
              className='w-full h-full object-cover'
              src={aboutus}
            ></video>
          </div>

          {/* Overlay Content */}
          <div className='absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center px-10'>
            <div className='w-1/2 text-left text-white'>
              <h1 className='font-bold text-[18px] mt-[20px]'>Our Philosophy</h1>
              <h1 className='font-bold text-[30px] mt-3'>Spectacular Creations That Give You A Distinct Look</h1>
              <p className='mt-6 text-[18px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
              <button className='mt-6 w-[150px] h-[50px] bg-white text-black font-semibold rounded-full hover:bg-[#5c5656] hover:text-white border-white'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
