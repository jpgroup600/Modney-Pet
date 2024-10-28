
import React from 'react'
import Image from 'next/image'
import bg from './images/background.png'


function page() {
  return (

    <div>
      <section className="flex flex-col items-center justify-center h-screen" style={{backgroundImage: `url(${bg.src})`}}>
        <h1>Modne Pet</h1>
      </section>

      <section className="flex flex-col items-center justify-center h-[80vh]" style={{backgroundColor: `#FFC800`}}>
        <h1>Modne Pet</h1>
      </section>
    </div>
  );
}

export default page