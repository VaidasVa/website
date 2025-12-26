FROM node:20-alpine AS build
WORKDIR /app

# Install build dependencies only
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS prod
WORKDIR /app

# Install only runtime deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/build ./build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000", "--single"]

# docker buildx build --platform linux/amd64,linux/arm64 -t vaidasv/website:latest --push .