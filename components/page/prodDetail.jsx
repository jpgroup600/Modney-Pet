import React from 'react'
import Housebag from './housebag'
import Housebag2 from './housebag2'
import Register2 from './register2'

function ProdDetail() {
    return (
        <>
            <section className="container mx-auto h-[100vh] w-full py-40">
                <div
                    className="w-full h-full flex flex-col justify-center items-center relative"
                    style={{ backgroundImage: `url('/hero-section.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='z-10'>
                        <h1 className="text-5xl font-bold text-white text-center mb-10">모드니∩펫 분양가이드</h1>
                        <div className="flex flex-col gap-7 text-xl text-white text-center">
                            <p>안녕하세요.</p>
                            <p>
                                하우스백 시리즈를 구입해주셔서<br />
                                진심으로 감사합니다.
                            </p>
                            <p>모드니펫은 펫 주거환경 개선을 위해 노력하는 브랜드입니다.</p>
                            <p>
                                단순히 애견이동가방을 판매하는 것이 아닌,<br />
                                펫의 보호자 하우스키퍼와 펫과의 일상의 알락함
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#FDF8F1]">
                <section className="container mx-auto gap-11 relative flex flex-col py-40">
                    <h1 className="text-4.5xl font-bold text-center">
                        고민의 결과<br />
                        하우스백 시리즈
                    </h1>
                    <div className="flex lg:gap-8 2xl:gap-12 lg:px-9 2xl:px-0 relative items-center justify-center">
                        <div className="flex flex-col shadow-xl rounded-[20px] overflow-hidden">
                            <img className="h-[320px] w-[395px] object-cover" src="/placeholder/dog.png" alt="card-img" />
                            <div className="bg-white p-7 flex flex-col gap-5">
                                <h3 className="text-2.5xl font-bold">모드니∩펫 BASEBAG</h3>
                                <div className="text-[#676767] text-xl">
                                    <div className="flex gap-4">
                                        <p>사이즈</p>
                                        <p>38 / 40 / 42 / 44</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p>색상</p>
                                        <p>BLACK / WHITE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-xl rounded-[20px] overflow-hidden">
                            <img className="h-[320px] w-[395px] object-cover" src="/placeholder/dog.png" alt="card-img" />
                            <div className="bg-white p-7 flex flex-col gap-5">
                                <h3 className="text-2.5xl font-bold">모드니∩펫 BASEBAG</h3>
                                <div className="text-[#676767] text-xl">
                                    <div className="flex gap-4">
                                        <p>사이즈</p>
                                        <p>38 / 40 / 42 / 44</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p>색상</p>
                                        <p>BLACK / WHITE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-xl rounded-[20px] overflow-hidden">
                            <img className="h-[320px] w-[395px] object-cover" src="/placeholder/dog.png" alt="card-img" />
                            <div className="bg-white p-7 flex flex-col gap-5">
                                <h3 className="text-2.5xl font-bold">모드니∩펫 BASEBAG</h3>
                                <div className="text-[#676767] text-xl">
                                    <div className="flex gap-4">
                                        <p>사이즈</p>
                                        <p>38 / 40 / 42 / 44</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p>색상</p>
                                        <p>BLACK / WHITE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Control */}
                        <button className="absolute left-0 -translate-y-1/2 top-1/2">
                            <img src="/arrow.svg" alt="icon" />
                        </button>
                        <button className="absolute rotate-180 right-0 -translate-y-1/2 top-1/2">
                            <img src="/arrow.svg" alt="icon" />
                        </button>
                    </div>
                </section>



            </section>

            <section>
                <hr className="bg-black border-none h-1" />
                <h1 className="text-5xl font-bold text-center mt-40">
                    하우스오너가 되어주세요.
                </h1>
                <p className="text-xl text-center mt-6 mb-[-3em]">펫의 보호자</p>
                <section className="container items-center justify-center mx-auto relative flex min-h-screen">

                    <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="n.svg" alt-="watermark" />
                    <div className="flex flex-col gap-36">
                        <div className="flex flex-col relative z-10">

                        </div>
                        <div className="flex flex-col relative z-10 items-center justify-center text-center text-3xl">

                        </div>
                    </div>
                </section>
                <hr className="bg-black border-none h-1" />
            </section>


        <section>
            <Housebag></Housebag>
        </section>

        <section>
            <Housebag2></Housebag2>
        </section>

        <section>
            <Register2></Register2>
        </section>



        </>

    )
}

export default ProdDetail