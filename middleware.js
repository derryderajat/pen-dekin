import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  //   const request = NextRequest;
  if (request.nextUrl.pathname === '/app') {
    // console.log(request.nextUrl.pathname);
  } else {
    // console.log(request.nextUrl.pathname);
    // console.log(process.env.SERVER);
    // return false;
  }
}
