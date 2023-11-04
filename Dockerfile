FROM joelnb/dumb-init-alpine AS dumb-init
FROM node:20.9-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

USER node

COPY --from=dumb-init /usr/bin/dumb-init /usr/bin/dumb-init
COPY . .

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
