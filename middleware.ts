export { middleware } from 'nextra/locales'

export const config = {
  // Run the locale middleware on everything except Next internals,
  // API routes and files that already contain a dot (static assets).
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
