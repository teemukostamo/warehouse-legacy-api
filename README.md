# Warehouse Legacy API workaround

The application is deployed [here](https://warehouse-legacy-api.herokuapp.com/)

A Node/Apollo/Graphql/React application written in TypeScript, that fetches warehouse product availability data from a legacy rest api and serves up-to-date, fast-to-access information to warehouse workers.

An initial parser for the legacy API is running [here](https://bad-api-parser.herokuapp.com/), and the repository for the parser is [here](https://github.com/teemukostamo/bad-api-parser)

## Installing / Getting started

The application is made of two npm projects, the backend server and the frontend UI. There are two package.json configs and therefore two places to run npm commands. Client is bootstrapped with create-react-app.

- Clone the repository and `npm install` in the root directory to install server dependencies.
- `cd client` and `npm install` client dependencies
- Rename the `.env.example` file in the root directory to `.env`.
- Rename `client/.env.local.example` to `.env.local`
- Run `npm run dev` in the root directory to start the server in development mode.
- In another terminal, `cd client` and `npm start` to start the client.

## Building

- Run `npm run tsc` to create a compiled production build of `.ts`-files.
- Run `npm run build:ui` to create a production build of the client.
- Run `npm start` to start the server in production mode.

In production mode the Express server serves a static build of the client at `/`

## Testing & Linting

Jest test library is used for testing the server, and Cypress is used for E2E tests. The application is configured to use most of the AirBnB ESlint plugin rules. The server and client have their own `.eslintrc` configurations, in `/` and `/client/` folders respectively.

- Run `npm run test` in the root directory to perform server tests
- To run Cypress E2E tests, make sure the client and server are running, then run `npm run cypress:open` in a third terminal window.
- Run `npm run lint` in the root directory to lint the server files.
- `cd client` and run `npm run lint` to lint the client files.

## Deploying to Heroku

- If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key by running `heroku login`
- Run `heroku git:remote -a <your-heroku-app-name>`
- Set the `PORT` environment variable to match the value in your `.env` file: `heroku config:set PORT=<YOUR PORT>`
- Rename the `/client/.env.production.example` file into `.env.production.local`, and set the value of `REACT_APP_APOLLO_URI` to point to heroku: `REACT_APP_APOLLO_URI=<https://your-app-name.herokuapp.com>/graphql`
- Run `npm run deploy:full` to commit changes and push the code to GitHub and Heroku.

# Docker

- To build a Docker image of the repository, run `docker build -t warehouse-legacy-api .` in the root directory.
- To run the container, run `docker run -p 4000:4000 warehouse-legacy-api`

The dockerized application serves the static build of the client from the server. and attempts to connect the client to the deployed server specified at the variable `REACT_APP_APOLLO_URI=<deployed-app-url>/graphql` in `.env.production.local` file. If the `.env.production.local` file is not present, the client will try to connect to `REACT_APP_APOLLO_URI=http://localhost:4000/graphql` specified at `.env.local`

# Licensing

This project is licensed under Unlicense license.
