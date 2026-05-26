FROM node:20-slim

WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages/web/package.json packages/web/package.json
RUN npm install
COPY packages/web packages/web
WORKDIR /app/packages/web
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
