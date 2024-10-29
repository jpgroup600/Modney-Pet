import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { user_id, password } = await req.json();

  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('user_id', user_id)
    .eq('password', password);

  if (error) {
    return new Response(JSON.stringify({ message: 'Invalid email or password', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.length === 0) {
    return new Response(JSON.stringify({ message: 'Invalid email or password' , data : "failed "}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 토큰 생성 로그인시
  

  else {
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in HTTP-only cookie
    cookies().set({
      name: 'userInfo',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
  

    return new Response(JSON.stringify({ message: 'Login successful', user: data , data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}