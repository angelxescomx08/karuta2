# Karuta App

Un proyecto creado con Nextjs para mostrar las cartas de Karuta (deporte basado en poemas). En este proyecto se pueden ver los poemas así como los kanjis, romaji y traducciones al inglés y al español.

## Correr el proyecto

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Crear una imagen de Docker

```bash
docker build -t karuta2:1.0.0 .
```

## Correr la imagen de Docker

```bash
docker container run -p 3000:3000 karuta2:1.0.0
```

## Correr los tests

```bash
npm run test
```

Se pueden correr en modo watch con:

```bash
npm run test:watch
```