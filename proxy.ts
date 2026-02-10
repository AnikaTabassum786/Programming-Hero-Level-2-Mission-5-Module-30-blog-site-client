import { NextRequest, NextResponse } from "next/server";

export async function proxy(request:NextRequest){
    console.log("Hello I am from proxy",request.url)
    return NextResponse.next()
}

export const config={
    matcher:["/dashboard"]
}