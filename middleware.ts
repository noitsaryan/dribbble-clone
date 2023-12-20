import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        let token = request.cookies.get("dribbble-auth")?.value;
        let user = request.cookies.get("dribbble-session")?.value;

        if (!user || !token) {
            return NextResponse.redirect(new URL("/sign-up", request.url))
        };
    }
    if (request.nextUrl.pathname.startsWith("/account")) {
        let token = request.cookies.get("dribbble-auth")?.value;
        let user = request.cookies.get("dribbble-session")?.value;

        if (!user || !token) {
            return NextResponse.redirect(new URL("/sign-up", request.url))
        };
    }
    if (request.nextUrl.pathname.startsWith("/sign-in")) {
        let token = request.cookies.get("dribbble-auth")?.value;
        let user = request.cookies.get("dribbble-session")?.value;
        if (!token || !user) return;
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/sign-in', '/account/:path*'],
}