FROM node:18-alpine AS builder
WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend ./backend

RUN cd backend && npm run build

# ---- Production stage ----
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

COPY --from=builder /app/backend/dist ./backend/dist

EXPOSE 5000

CMD ["node", "backend/dist/server.js"]
