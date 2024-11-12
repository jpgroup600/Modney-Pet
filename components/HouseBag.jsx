import React from 'react'

function HouseBag() {
    return (
        <div>
            <div className="flex flex-col shadow-xl rounded-[20px] overflow-hidden">
                <img className="h-full w-full object-cover" src="/placeholder/dog.png" alt="card-img" />
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
        </div>
    )
}

export default HouseBag