FROM node:20
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN rm -rf node_modules package-lock.json && npm install

COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000", "--single"]

# docker buildx build --platform linux/amd64,linux/arm64 .