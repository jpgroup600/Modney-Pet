import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { product_name, customer_info } = await req.json();

  const { data, error } = await supabase
  .from('product')
  .insert([
    { product_name: product_name, detail_info :customer_info },
  ])
  .select()
        

  if (error) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.length === 0) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', data : "failed "}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 토큰 생성 로그인시
  

  else {
    return new Response(JSON.stringify({ message: '서버 접속 성공', data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}