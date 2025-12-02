import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Handle xsudoku subdomain
  if (hostname.startsWith('xsudoku.')) {
    // If already on /xsudoku path, let it through
    if (url.pathname.startsWith('/xsudoku')) {
      return NextResponse.next()
    }

    // Rewrite root and other paths to /xsudoku
    if (url.pathname === '/') {
      url.pathname = '/xsudoku'
    } else {
      // For paths like /privacy-policy, rewrite to /xsudoku/privacy-policy
      url.pathname = `/xsudoku${url.pathname}`
    }

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next/static|_next/image|assets|favicon.ico|app-ads.txt).*)',
  ],
}
