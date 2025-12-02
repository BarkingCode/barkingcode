import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // Handle xsudoku subdomain (xsudoku.barkingcode.com or xsudoku.localhost)
  const isXsudokuSubdomain = hostname.includes('xsudoku')

  if (isXsudokuSubdomain && !pathname.startsWith('/xsudoku')) {
    const newPath = pathname === '/' ? '/xsudoku' : `/xsudoku${pathname}`
    return NextResponse.rewrite(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next/static|_next/image|assets|favicon.ico|app-ads.txt).*)',
  ],
}
