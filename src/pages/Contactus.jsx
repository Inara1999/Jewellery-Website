import React from 'react';
import About from '../assets/images/About.jpg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import marker icons statically
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon URLs
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
        <div className="relative flex flex-col text-left w-1/3 h-[300px] ml-[450px] mt-[120px]">
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
      <div className="flex flex-wrap w-[1100px] h-[200px] bg-[#f7cc71] mx-auto p-4 gap-4 items-center mt-8">
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

      {/* Map Section */}
      <div className="w-full flex justify-center items-center mt-10 mb-10">  
        <div className="w-[1100px] h-[500px] rounded-lg shadow-lg overflow-hidden flex flex-row">
        <div className='flex flex-col mb-4 h-[500px] w-1/2'>
          <h1 className='flex justify-center font-bold text-[40px]'>Contact us</h1>
          <p className='text-[14px] text-center mt-1'>
            For inquiries or custom designs, contact us below or visit our store.</p>
           
        </div>
        <div className="h-full w-1/2 ">
          <MapContainer
            center={[31.5204, 74.3587]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
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
    </div>
  );
}

export default Contactus;
