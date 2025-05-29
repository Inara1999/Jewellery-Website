import React from 'react';
import background from '../assets/images/background.jpeg';
import About from '../assets/images/About.jpg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function Contactus() {
  return (
    <div>
      {/* Header Section */}
      <div className="h-[600px] flex justify-center mt-8 relative">
        <div
          className="absolute w-[1100px] h-[600px] flex justify-center opacity-[0.45]"
          style={{
            backgroundImage: `url(${About})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="relative flex flex-col text-left w-1/3 h-[300px] ml-[400px] mt-[120px]">
          <h1 className="font-bold text-[52px] pl-4">Contact Us</h1>
          <h1 className="font-semibold text-[24px] pl-4">
            Get in Touch with Us for Any Custom Jewellery Design
          </h1>
          <hr className="border border-yellow-500 w-[150px] ml-5 mt-5" />
          <p className="text-[18px] ml-5 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="flex flex-wrap w-[1100px] h-[200px] bg-[#f7cc71] mx-auto p-4 gap-4 items-center mt-4">
        <h1 className="w-[350px] font-bold text-[30px] text-left text-black ml-8">
          Golden Citizen Membership
        </h1>
        <p className="text-black w-[300px] text-left font-bold text-[20px] ml-[180px]">
          Plus 5% Rewards and Free Shipping
        </p>
        <button className="w-[150px] h-[50px] bg-black text-white font-semibold mt-2 rounded-full ml-4 hover:bg-white hover:text-black">
          JOIN TODAY
        </button>
      </div>

     {/* Contact Form + Map Section Side by Side */}
<div className="w-full flex justify-center mt-4 px-4">
  <div className="flex flex-col md:flex-row w-full max-w-[1100px]  items-stretch bg-[#111111c4] shadow-lg rounded-lg">
    
    {/* Contact Form */}
    <div className="w-full md:w-1/2 bg-black p-10 rounded-lg shadow-lg text-white">
      <h1 className="text-[36px] font-bold text-center mb-2">Contact Us</h1>
      <p className="text-center text-[14px] text-gray-300 mb-6">
        For inquiries or custom designs, contact us below or visit our store.
      </p>

      <div className="flex flex-col gap-2 justify-center">
        <label className="text-xs text-white ml-1">
                Name <span className="text-red-500">*</span>
              </label>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 p-3  rounded col-span-2 text-black"
        />
        <label className="text-xs text-white ml-1 mt-3">
                Email <span className="text-red-500">*</span>
              </label>
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 p-3 rounded text-black"
        />
        <label className="text-xs text-white ml-1 mt-3">
                Phone Number<span className="text-red-500">*</span>
              </label>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 p-3 rounded-[8px] text-black"
        />
        <textarea
          placeholder="Your Message"
          rows="2"
          className="border border-gray-300 p-3 rounded col-span-2 text-black mt-3"
        ></textarea>
        <button
          className="mx-auto mt-4 w-[150px] h-[50px]  col-span-2 items-center bg-yellow-500 text-black py-3 rounded-full hover:bg-black hover:text-white"
          onClick={() => alert('Message sent (dummy action)')}
        >
          Send Message
        </button>
      </div>
    </div>

    {/* Map Section */}
    <div className="w-full md:w-1/2 h-[100%] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[31.5204, 74.3587]}
        zoom={13}
        style={{ height: '100%', minHeight: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[31.5204, 74.3587]}>
          <Popup>Our Store Location <br /> Lahore, Pakistan</Popup>
        </Marker>
      </MapContainer>
    </div>
   </div>
  </div>

  {/* 3rd div */}
        <div className='flex justify-center'>
          <div className='w-[1100px] h-[200px] bg-[#111111c4] mt-4 mb-6 shadow-lg flex flex-col items-center justify-center'>

          <p className='text-yellow-500 font-bold text-[30px] pt-0'>+1 800 123 456</p>
          <p className='font-semibold text-[18px]'>12 W Broadway, New York 10007, USA</p>
          
          <div className='flex flex-row items-center justify-center gap-4 mt-9 mb-6 '>   
          <i className="fa-brands fa-facebook  text-white hover:text-yellow-500 transition duration-100" ></i>
          <i className="fa-brands fa-twitter text-white hover:text-yellow-500 transition duration-100" ></i>
          <i className="fa-brands fa-youtube  text-white hover:text-yellow-500 transition duration-100 "></i>
          <i className="fa-brands fa-instagram  text-white hover:text-yellow-500 transition duration-100"></i>
          </div>

          </div>
        </div>

    </div>
  );
}

export default Contactus;
