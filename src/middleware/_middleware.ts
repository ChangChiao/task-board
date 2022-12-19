import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
  if (req.nextUrl.href.includes('/_next/image')) {
    return NextResponse.rewrite(
      req.nextUrl.href.replace('/_next/image', '/_next/image')
    );
  }
  return NextResponse.next();
}
