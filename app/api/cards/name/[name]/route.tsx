import { NextResponse } from "next/server";
import { cartas } from "../../../../utils";

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const carta = cartas.find(card => card.name.toLowerCase() === params.name.toLowerCase()) || { ok: false, message: 'Las cartas tienen un id entre 1 y 100' }
    return NextResponse.json(carta, {
        status: 200
    })
}