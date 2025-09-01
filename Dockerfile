# -------- Build stage --------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps first (better layer cache)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

# Build client + server
ENV NODE_ENV=production
RUN npm run build

# -------- Runtime stage --------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

# Copy only the built artifacts and needed runtime files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Optional: if you still want to serve attached_assets directly from the container, uncomment:
# COPY --from=builder /app/attached_assets ./attached_assets

# Install only production dependencies (none are needed to run dist/index.js, but keep minimal)
RUN npm pkg delete devDependencies || true

# App listens on PORT
EXPOSE 5000

CMD ["node", "dist/index.js"]

