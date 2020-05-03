FROM node:10 AS build
WORKDIR /usr/src/app
COPY .babelrc ./
COPY package*.json ./
COPY webpack.server.build.config.js ./
COPY webpack.client.build.config.js ./
COPY src src
COPY assets assets
RUN npm install
ENV NODE_ENV productiongi
ENV JWT_SECRET awv4BcIzsRysXkhoSAb8t8lNENgXSqBruVlLwd45kGdYjeJHLap9LUJ1t9DTdw36DvLcWs3qEkPyCY6vOyNljlh2Er952h2gDzYwG82rs1qfTzdVIg89KTaQ4SWI1YGY
ENV username devuser
ENV password DevUser2020!
ENV database localhost
ENV host 192.168.178.34
RUN npm install -g mysql2 sequelize sequelize-cli
RUN sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js --env production
RUN npm run test
RUN npm run build
FROM node:10
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/dist dist
RUN npm install --only=production
EXPOSE 8000
CMD [ "npm", "run", "server:production" ]