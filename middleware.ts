import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {

    const { pathname } = req.nextUrl;
    console.log(res)
    console.log('negrdad')
}