FROM node:latest as builder
WORKDIR /app
COPY ./web/journal-ui/package*.json ./
RUN npm install
COPY ./web/journal-ui .
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY ./deployments/nginx/journal-ui.conf /etc/nginx/nginx.conf