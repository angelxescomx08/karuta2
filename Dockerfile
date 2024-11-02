FROM node:lts-alpine3.20 AS development
WORKDIR /app
COPY . .
RUN npm i
RUN npm run test

FROM node:lts-alpine3.20 AS production
WORKDIR /app
EXPOSE 3000
COPY --from=development /app/app/ /app/public ./
COPY --from=development /app/.eslintrc.json /app/.prettierrc /app/next-env.d.ts  ./
COPY --from=development /app/next.config.js /app/package.json /app/postcss.config.js ./
COPY --from=development /app/tailwind.config.ts /app/tsconfig.json ./
RUN npm install --omit=dev
RUN npm run build
CMD [ "npm", "run", "start" ]