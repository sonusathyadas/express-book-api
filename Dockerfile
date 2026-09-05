# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /usr/src/app

# ---- Dependencies ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# ---- Runtime ----
FROM base AS runtime
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY package.json ./
COPY src ./src

# Run as a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "src/app.js"]
