FROM node:16

WORKDIR /app

COPY . /app

RUN npm i
RUN npm i -g ts-node

EXPOSE 5000

CMD ["npx", "ts-node", "index.ts"]