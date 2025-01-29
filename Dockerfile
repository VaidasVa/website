FROM node:20-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev

COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

# docker buildx build --platform linux/amd64,linux/arm64 .