FROM node:22.11.0 AS development
WORKDIR /app
COPY . .
RUN npm i
#RUN npm run lint
RUN npm run test

FROM node:22.11.0 AS production
WORKDIR /app
EXPOSE 3000
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package.json ./package.json
COPY --from=development /app/next.config.js ./next.config.js
COPY --from=development /app/public ./public
COPY --from=development /app/app ./app
COPY --from=development /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=development /app/postcss.config.js ./postcss.config.js
COPY --from=development /app/tsconfig.json ./tsconfig.json
RUN npm install --omit=dev
RUN npm run build
CMD [ "npm", "run", "start" ]