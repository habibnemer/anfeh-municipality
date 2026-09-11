import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'anfeh_admin_session'
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'anfeh-admin-2026'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = request.cookies.get(SESSION_COOKIE)
    if (session?.value !== SESSION_SECRET) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
