
'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/public/background.png'
import slide1 from '@/public/png2.png'
import { useState } from 'react';
import SliderComponent from '@/components/slider'
import Slider2 from '@/components/slider2'
import Header from '@/components/header'
import Slider3 from '@/components/slider3'
import Slider4 from '@/components/slider4'
import Slide5 from '@/components/slide5'
import Footer from '@/components/footer'

function page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (

    <div className="overflow-x-hidden">
      <Header></Header>
      <section className="relative flex flex-col items-center justify-center h-screen">
        <SliderComponent></SliderComponent>
      </section>

      <section className="flex flex-col items-center h-[100vh]" style={{backgroundColor: `#FFC800`}}>
        <h2 className="text-2xl font-bold text-center mt-20">Brand Philosophy</h2>
        <h3 className="text-5xl font-[500] text-center mt-10">라이프 스타일 리더 힐스테이트</h3>
        <p className="text-[1.2em] font-[500] text-center mt-8">힐스테이트는 라이프 스타일 리더입니다. 우리는 라이프 스타일을 중시하며, <br></br> 
        삶의 질을 높이기 위해 노력합니다.</p>

        <div className="w-[80%] h-[50%]">
        <Image src={bg} alt="background" className="text-show-image w-full h-full object-cover mt-10" />
        </div>
      </section>

      <secition >
        <Slider2></Slider2>

      </secition>

      <secition >
        <Slider3></Slider3>

      </secition>

      <section>
        <div className='h-[100vh] w-full bg-white flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-bold text-center mt-20 text-[#961E1E]">Brand Philosophy</h2>
        <h3 className="text-5xl font-[500] text-center mt-10">라이프 스타일 리더 힐스테이트</h3>
        <p className="text-[1.2em] font-[500] text-center mt-8">힐스테이트는 라이프 스타일 리더입니다. 우리는 라이프 스타일을 중시하며, <br></br> 
        삶의 질을 높이기 위해 노력합니다.</p>


        

        </div>

        <div className='m-auto w-[80vw]'>
        <Slider4></Slider4>
        </div>
        
        
        
      </section>

      <section>
        <Slide5></Slide5>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default page