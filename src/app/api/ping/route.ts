import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ hello: 'Pong' });
  const modifiedResponse = new Response(response.body, {
    headers: response.headers,
    status: 200,
  });
  return modifiedResponse;
}
