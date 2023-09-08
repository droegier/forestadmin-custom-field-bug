FROM node:18-alpine

ARG DATABASE_URL
ARG FOREST_AUTH_SECRET
ARG FOREST_ENV_SECRET
ARG APPLICATION_URL
ARG API_BASE_URL
ARG COCKPIT_TOKEN_SECRET
ARG STRIPE_SECRET_KEY
ARG GOOGLE_GEOCODING_API_KEY
ARG BEXIO_API_TOKEN
ARG WEB_PUBLIC_URL
ARG PREFIX

ENV DATABASE_URL=${DATABASE_URL}
ENV APPLICATION_PORT="3310"
ENV NODE_ENV="production"
ENV FOREST_AUTH_SECRET=${FOREST_AUTH_SECRET}
ENV FOREST_ENV_SECRET=${FOREST_ENV_SECRET}
ENV APPLICATION_URL=${APPLICATION_URL}
ENV API_BASE_URL=${API_BASE_URL}
ENV COCKPIT_TOKEN_SECRET=${COCKPIT_TOKEN_SECRET}
ENV STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
ENV GOOGLE_GEOCODING_API_KEY=${GOOGLE_GEOCODING_API_KEY}
ENV BEXIO_API_TOKEN=${BEXIO_API_TOKEN}
ENV WEB_PUBLIC_URL={WEB_PUBLIC_URL}
ENV PREFIX={PREFIX}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
RUN chmod 777 .forestadmin-schema.json

EXPOSE ${APPLICATION_PORT}

CMD ["npm", "start"]
