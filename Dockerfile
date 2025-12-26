FROM node:20-slim
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000", "--single"]

# docker buildx build  --platform linux/amd64,linux/arm64 .
# docker build -t vaidasv/website:latest .