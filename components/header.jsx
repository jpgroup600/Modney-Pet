import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logoo.png';
import Link from 'next/link';
import Loginicon from '@/public/Loginicon.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setScrollDirection('top');
            } else if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`flex items-center border-b fixed w-full shadow-sm p-8 transition-all z-50 duration-700 ease-in-out 
                ${scrollDirection === 'top' ? 'bg-transparent shadow-none border-none' :
                    scrollDirection === 'down' ? 'translate-y-[-100%] shadow-none border-none' : 'bg-white'
                }`}
        >

            
            <div className="flex items-center justify-center space-x-4">
            
                <Image src={logo} alt="Logo" width={250} height={250} />
                <div className="flex items-center absolute right-8">
                    <Link href="/login" className='flex flex-col items-center mr-5'>
                        <Image src={Loginicon}  className={`transition-all duration-300 ${scrollDirection === 'top' ? 'filter brightness-[1000]' : ''}
                        ${scrollDirection === 'down' ? 'filter brightness-[0.1]' : ''}
                        `} alt="Login" width={50} height={50} />
                        <div className={`absolute text-center -bottom-3 text-[0.8em] font-[600] ${scrollDirection === 'top' ? 'text-white' : 'text-black'}`}>
                            로그인
                        </div>
                    </Link>

                    <Link href="/main" className='flex flex-col items-center mr-5'>
                        <div className='text-[1.2em] font-[600]'>메인 페이지</div>
                    </Link>

                    <button
                        className="flex flex-col justify-center items-center w-6 h-8 space-y-1.5"
                        onClick={toggleMenu}
                    >
                        <span
                            className={`block w-6 h-0.5 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''} ${scrollDirection === 'top' ? 'bg-white' : 'bg-black'}`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} ${scrollDirection === 'top' ? 'bg-white' : 'bg-black'}`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''} ${scrollDirection === 'top' ? 'bg-white' : 'bg-black'}`}
                        ></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;