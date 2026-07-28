import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // ============================================================
  // ⚠️ ATENÇÃO: Este middleware SÓ FUNCIONA em desenvolvimento
  // Em produção com SSG (output: "export"), ele é IGNORADO
  // Todos os redirecionamentos também estão em next.config.mjs
  // ============================================================
  
  // Só executa em desenvolvimento
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Redirecionamentos (apenas para desenvolvimento)
  if (pathname === '/guia') {
    url.pathname = '/guias';
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/montadores') {
    url.pathname = '/montadores/marilia';
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/index' || pathname === '/index.html') {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  if (
    pathname !== '/' &&
    pathname !== '/api' &&
    !pathname.startsWith('/api/') &&
    pathname.endsWith('/')
  ) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|llms-index.json|manifest.json|apple-touch-icon.png|icon-192.png|icon-512.png|browserconfig.xml|banners|imagens\\ produtos|montadores|redirects|scripts).*)',
    '/guia',
    '/montadores',
    '/index',
    '/index.html',
  ],
};