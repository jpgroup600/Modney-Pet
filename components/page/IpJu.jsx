import React from 'react';
import changeSerialCode from '@/hooks/changeSerial'
function IpJu({serial}) {

    if(serial){
        serial = changeSerialCode(serial);
        
    }
  return (
    <div
      className="w-full h-[100vh] flex justify-center items-start"
      style={{
        backgroundImage: "url('/frame.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="relative bg-white flex flex-col items-center justify-center p-4 rounded shadow-lg mt-20"
        style={{ width: '400px', height: '50px' }} // Adjust width and height as needed
      >
        <div className="text-center">{serial? serial.apartment + " " + serial.building + " " + serial.unit : ""}</div>
      </div>
    </div>
  );
}

export default IpJu;