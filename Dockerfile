FROM node:20-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# docker buildx build --platform linux/amd64,linux/arm64 .