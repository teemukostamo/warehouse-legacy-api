# Warehouse Legacy API workaround

A Node/React application written in TypeScript, that fetches warehouse product availability data from a legacy rest api and serves up-to-date, fast-to-access information to warehouse workers.

The application is made of two npm projects, the backend server and the frontend UI. There are two package.json configs and therefore two places to run npm commands. Client is bootstrapped with create-react-app.

## Installing / Getting started

- Clone the repository and `npm install` in the root directory to install server dependencies.
- `cd client` and `npm install` client dependencies
- Rename the `.env.example` file to `.env` and add any configuration you might need.
- Run `npm run dev` in the root directory to start the server in development mode.
- In another terminal, `cd client` and `npm start` to start the client.
- Run `npm run tsc` to create a compiled production build of `.ts`-files.
- Run `npm start` to start the server in production mode.
- Run `npm run build:ui` to create a production build of the client.
- Run `npm run test` in the root directory to perform server tests
- To run Cypress E2E tests, make sure the client and server are running, then run `npm run cypress:open` in a third terminal window.

In production mode the Express server serves a static build of the client at `/`
