'use client'
import React, {useState, useEffect} from 'react';

import changeSerialCode from '@/hooks/changeSerial'
import { getCookie } from '@/hooks/setCookie'

function IpJu() {

    const [serial, setSerial] = useState("");
    useEffect(()=>{
        const getserial = getCookie('user_serial');
        setSerial(getserial);

        if(getserial){
            let changedSerial = changeSerialCode(getserial);
            setSerial(changedSerial);
        }

    },[])
    
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