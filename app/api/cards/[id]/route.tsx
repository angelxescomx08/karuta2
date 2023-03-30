import { NextResponse } from "next/server";
import { cartas } from "../../../utils";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const carta = cartas.find(card => card.id === params.id) || { ok: false, message: 'Las cartas tienen un id entre 1 y 100' }
    return NextResponse.json(carta, {
        status: 200
    })
}