FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY prisma ./prisma

COPY .env ./

RUN npx prisma generate --schema=./prisma/schema.prisma

COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start:prod"]
