
'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/public/background.png'
import slide1 from '@/public/png2.png'
import { useState,useEffect } from 'react';
import SliderComponent from '@/components/slider'
import Slider2 from '@/components/slider2'
import Header from '@/components/header'
import Slider3 from '@/components/slider3'
import Slider4 from '@/components/slider4'
import Slide5 from '@/components/slide5'
import Footer from '@/components/footer'
import Serial from '@/components/serial'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getCookie } from '@/hooks/setCookie'

import png1 from '@/public/main/1.png'
import png2 from '@/public/main/2.png'
import png3 from '@/public/main/3.png'
import png4 from '@/public/main/4.png'
import png2_1 from '@/public/main/2-1.png'

import Register from '@/components/register'

function page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // const user_serial = getCookie('user_serial');
    // if (user_serial) {
    //   setIsValid(true);
    // }
  }, []);

  console.log("isValid",isValid);
  return (
    <>
    <Header></Header>
    {isValid? (
    <div className="overflow-x-hidden">
      
      <section className="relative flex flex-col items-center justify-center h-screen">
        <SliderComponent></SliderComponent>
      </section>

      <section className="flex flex-col items-center h-[100vh]" >
       <Image src={png1} alt="background" className="text-show-image w-[80%] h-[80%] object-cover mt-10" />
      </section>

      <section >
        <Slider2></Slider2>

      </section>

      <section className='flex flex-col items-center h-[100vh] mt-20'>
      <div className='m-auto w-[80vw]'>
        <Slider4></Slider4>
        </div>

      </section>

      <section className='flex flex-col items-center h-full w-full mt-20'>
        <Image src={png2_1} alt="background" className="text-show-image w-[80%] h-[80%] object-cover mt-10" />
      <Image src={png3} alt="background" className="text-show-image object-cover mt-10" />
   
        
      </section>

      <section className='flex flex-col items-center h-full w-full mt-20'>
        <Image src={png4} alt="background" className="text-show-image w-full h-full object-cover mt-10" />
      </section>

      <section className='h-[100vh] w-full bg-white flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-bold text-center mt-20 text-[#961E1E]">Brand Philosophy</h2>
        <h3 className="text-5xl font-[500] text-center mt-10">라이프 스타일 리더 힐스테이트</h3>
        <p className="text-[1.2em] font-[500] text-center mt-8">힐스테이트는 라이프 스타일 리더입니다. 우리는 라이프 스타일을 중시하며, <br></br> 
        삶의 질을 높이기 위해 노력합니다.</p>
        

      <Register></Register>


      </section>

      
    </div>
  ): (
    <>

    <section className="flex flex-col items-center h-[100vh]" style={{backgroundColor: `white`}}>
        <h2 className="text-2xl font-bold text-center mt-20">Brand Philosophy</h2>
        <h3 className="text-5xl font-[500] text-center mt-10">라이프 스타일 리더 힐스테이트</h3>
        <p className="text-[1.2em] font-[500] text-center mt-8">멤버이신가요? <br></br> 
        멤버 전용 시리얼 번호를 입력해주세요.</p>
        
        
        <Serial isValid={isValid} setIsValid={setIsValid}></Serial>

        <div className="w-[80%] h-[50%]">
        <Image src={bg} alt="background" className="text-show-image w-full h-full object-cover mt-10" />
        </div>
      </section>
    </>
  )
  }
  <Footer></Footer>
  </>
  )
  
}

export default page