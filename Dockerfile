FROM node:alpine as builder
WORKDIR /app
COPY ./ ./
RUN npm i
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80