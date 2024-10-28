import { createClient } from '@/utils/supabase/server';

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

  return new Response(JSON.stringify({ message: 'Login successful', user: data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}