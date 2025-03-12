import React from 'react'
import Button from './button'


import Body_Form_Content from './body_farm_content';

export default function Body_Form() {
 
  return (
    <div className='md:w-[95%] w-[100%]  h-auto border-b  md:border-t-0 border-t md:border-[2px] border-[#A5A5A5]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full flex flex-col items-center'>
            {/* title */}
            <div className='md:text-[45px] text-[24px]  noto-sans-kr-bold text-center mb-[19px] mt-[30px] md:mt-[150px]'>하우스백을<br/>
            분양받으시겠습니까?</div>
           <Body_Form_Content/>
        </div>
       
        
    </div>
  )
}
