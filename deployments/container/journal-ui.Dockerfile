FROM node:alpine as builder
WORKDIR /app
COPY ./web/journal-ui/package*.json ./
RUN npm install
COPY ./web/journal-ui .
RUN npm run build

FROM nginx:alpine
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY ./configs/journal-ui.conf /etc/nginx/nginx.conf
EXPOSE 80