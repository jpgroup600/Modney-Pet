'use client';
import React, { useState } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Serial from '../serial';

function Login({setIsValid}) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const  [isClicked, setIsClicked] = useState(false);
    const [user_info, setUserInfo] = useState({
        user_id: '',
        password: ''
    });

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/check_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(user_info)
            });
            if (!response.ok) {
                // Handle HTTP errors
                console.error('Login failed:', response.statusText);
                return;
            }

            const data = await response.json();
            // Handle successful login, e.g., redirect or update state
            setIsLoading(false);
            if (data.data === "success") {
                console.log("data.userRole",data.user[0].role);
                if (data.user[0].role === "admin") {

                    router.push('/login/admin/');
                }
                else {
                    router.push('/login/user/');
                }

                return;
            }

            else {
                alert("아이디 또는 비밀번호가 틀렸습니다.");
            }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

  return (
    <div>
      <main
        className="h-svh gap-28 flex-col bg-cover bg-center bg-[url('/bg-login.jpg')] w-full flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img src="/white-logo.svg" alt="logo" />
          <Button
            className="bg-[#FAC600] rounded-full font-bold text-3xl py-4 w-fit px-16"
            onClick={()=> {
                setIsClicked(!isClicked);
            }}
          >
            하우스백 정품 인증 하기
          </Button>
          {isClicked && (
            <div className='mt-10'>
                <Serial setIsValid={setIsValid}></Serial>
            </div>
          )}
        </div>
        <div className="flex flex-col w-[426px] gap-7">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="아이디">
              아이디
            </label>
            <Input
              placeholder="아이디를 입력하세요"
              className="w-full bg-transparent border-b-2 border-white py-1 text-white placeholder:text-white/50 focus:outline-none"
              id="아이디"
              type="text"
              onChange={(e) => {
                setUserInfo({...user_info, user_id: e.target.value});
              }}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="패스워드">
              패스워드
            </label>
            <Input
              placeholder="비밀번호를 입력하세요"
              className="w-full bg-transparent border-b-2 border-white py-1 text-white placeholder:text-white/50 focus:outline-none"
              id="패스워드"
              type="password"
              onChange={(e) => {
                setUserInfo({...user_info, password: e.target.value});
              }}
            />
          </div>
          <Button
            className="bg-white  text-black rounded-xl mt-3 text-2xl font-medium text-center py-4"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Login;