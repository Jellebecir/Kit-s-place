FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

# ---- Production stage ----
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./backend/
RUN cd backend && npm install --omit=dev

COPY --from=builder /app/dist ./backend/dist

EXPOSE 5000

CMD ["node", "backend/dist/server.js"]
