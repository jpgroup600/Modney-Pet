
'use client'
import React from 'react'
import Image from 'next/image'
import bg from '@/public/background.png'
import slide1 from '@/public/png2.png'
import { useState, useEffect } from 'react';
import SliderComponent from '@/components/slider'
import Slider2 from '@/components/slider2'
import Header from '@/components/header'
import Slider3 from '@/components/slider3'
import Slider4 from '@/components/slider4'
import Slide5 from '@/components/slide5'
import Footer2 from '@/components/Footer2'
import Serial from '@/components/serial'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getCookie } from '@/hooks/setCookie'
import ProdDetail from '@/components/page/prodDetail'

import png1 from '@/public/main/1.png'
import png2 from '@/public/main/2.png'
import png3 from '@/public/main/3.png'
import png4 from '@/public/main/4.png'
import png2_1 from '@/public/main/2-1.png'

import Register from '@/components/register'
import Login from '@/components/page/Login'
import IpJu from '@/components/page/IpJu'
import MainPost from '@/components/mainPost'

function page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isValid, setIsValid] = useState(false);

  // useEffect(() => {
  //   const user_serial = getCookie('user_serial');
  //   if (user_serial) {
  //     setIsValid(true);
  //   }
  // }, []);

  console.log("isValid", isValid);
  return (
    <>

      {isValid ? (
        <>
          <Header></Header>
          <ProdDetail></ProdDetail>
        </>
      ) : (
        <>
          <Login setIsValid={setIsValid} ></Login>
          <section className='flex items-center justify-center'>
            <MainPost></MainPost>
          </section>


        </>
      )
      }
      <Footer2></Footer2>
    </>
  )

}

export default page