# Node, Typescript, Docker boiler plate

This is a Node.js application written in TypeScript and packaged with Docker. Setup based on https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f

## Prerequisites

- Docker
- Node.js
- npm

Running the Application without docker:

Development
In development, the application uses nodemon to automatically restart the server whenever file changes are detected. To start the application in development mode, run:

npm run dev

Production
In production, the application is built using TypeScript and run with Node.js. To start the application in production mode, first build the application:

npm run build
Then, start the application:

Running the Application with docker:
This application is configured to run in a Docker container with nodemon. The Dockerfile and docker-compose.yml files are included in the repository.

To build the Docker image, run:

docker-compose build

To start the Docker container, run:
docker-compose up -d

To stop the Docker container, run:
docker-compose down


