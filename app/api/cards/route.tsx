import { NextResponse } from "next/server";
import { cartas } from "../../utils";

export async function GET(request: Request) {
    return NextResponse.json(cartas, { status: 200 })
}