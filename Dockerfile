FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

# workaround for the missing wasm runtime module issue
# RUN npx prisma@6.15.0 generate

RUN npm install

COPY . .

EXPOSE 3000
CMD ["sh","-c","npx prisma migrate deploy && npm run dev"]
