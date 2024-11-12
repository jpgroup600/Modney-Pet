import React from 'react'

function Footer2() {
  return (
    <>
    <footer className="bg-black w-full text-white py-16 h-[50vh] flex flex-col justify-center">
        <div className='w-[70%] mx-auto'>
        <div className="container mx-auto px-0 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] font-bold mb-4">모드니펫</h2>
            <div className="flex flex-col gap-1 text-[white] text-[0.8rem]" style={{fontFamily: 'Noto Sans KR', letterSpacing: '0.15rem'}}>
              <p>
                대표 000  |  사업자번호 000-00-00000  |  Tel 00-000-0000  |
                통신판매번호 0000-0000-0000  |  사업자번호조회
              </p>
              <p>
                E-mail 00-000-0000  |  고객센터 0000-0000  |  서울 00구 000길 00.
                123호 (00동,건물이름 1차)
              </p>
              <p>Copyright(c) All right Reserved.</p>
            </div>
            <div className="flex gap-7 my-7">
              <div className="h-8 w-8 bg-[#DADCE0] rounded-full"></div>
              <div className="h-8 w-8 bg-[#DADCE0] rounded-full"></div>
              <div className="h-8 w-8 bg-[#DADCE0] rounded-full"></div>
              <div className="h-8 w-8 bg-[#DADCE0] rounded-full"></div>
              <div className="h-8 w-8 bg-[#DADCE0] rounded-full"></div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col container mx-auto gap-6 2xl:px-48 px-0">
          <div className="bg-white h-px"></div>
          <div className="flex gap-8 text-[0.8rem]">
            <a className="pl-4 border-l-4" href="#">개인정보처리방침</a>
            <a className="pl-4 border-l-4" href="#">이용약관</a>
            <a className="pl-4 border-l-4" href="#">품질오류신고</a>
            <a className="pl-4 border-l-4" href="#">품질오류신고확인 </a>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer2