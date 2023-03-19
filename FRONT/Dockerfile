FROM node:14 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.19
COPY --from=build /app/dist/front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
