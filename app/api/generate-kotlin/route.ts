import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { cartasArray, type Carta } from '@/app/data/cartas';

// Función para generar el archivo Kotlin
const generateKotlinFile = (cartas: Carta[]): string => {
  const kotlinData = cartas
    .map(
      (carta) => `    Card(
        id = "${carta.id}",
        name = "${carta.name}",
        silaba = "${carta.silaba}",
        romaji = "${carta.romaji}",
        english = "${carta.english}",
        spanish = "${carta.spanish}",
        author = "${carta.author}",
        authorJapanese = "${carta.authorJapanese}",
        japanese = "${carta.japanese}"
    )`
    )
    .join(',\n');

  return `val cards = listOf(\n${kotlinData}\n)`;
};

// POST: Generar archivo Kotlin
export async function GET(req: Request) {
  try {
    // Generar contenido en Kotlin
    const kotlinContent = generateKotlinFile(cartasArray);

    // Guardar archivo en la carpeta pública
    const filePath = path.join(process.cwd(), 'public', 'Cartas.kt');
    fs.writeFileSync(filePath, kotlinContent);

    return NextResponse.json({
      message: 'Archivo generado',
      url: '/Cartas.kt',
    });
  } catch (error) {
    console.log({
      error,
    });
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
