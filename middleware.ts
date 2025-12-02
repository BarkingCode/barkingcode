import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl

  // Handle xsudoku subdomain
  // Matches: xsudoku.barkingcode.com, xsudoku.localhost:3000, etc.
  if (hostname.startsWith('xsudoku.')) {
    // Rewrite the URL to /sudokux directory
    // We keep the pathname, so xsudoku.com/foo -> /sudokux/foo
    url.pathname = `/sudokux${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // Default behavior for other domains (e.g. main domain)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - app-ads.txt (AdMob verification file - MUST be served from root)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|app-ads.txt).*)',
  ],
}
