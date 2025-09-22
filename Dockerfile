FROM node:22 AS base
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

WORKDIR /app/.next/standalone

RUN mv /app/public .
RUN mv /app/.next/static .next

ENV NODE_ENV=production

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]