import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log('middleware work'); //консоль виведеться в терміналі сервера а не браузера

  const token = request.cookies.get('token')?.value; // прямо тут можна отримати токени і обробити їх
  console.log('token', token);

  // наприклад якщо token відсутній, можна здійснити переадресацію на іншу сторінку, наприклад на головну
  if(!token && request.nextUrl.pathname.startsWith('/profile-fake')) {
    // return NextResponse.redirect(new URL('/', request.url));
    console.log('token is down');
  }

  return NextResponse.next();
}

// коли буде спрацьовувати middleware
export const config ={
  matcher: ['/profile-fake/:path*']
}