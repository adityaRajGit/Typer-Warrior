// import express from 'express';
// import http from 'http';
// import socketServer from './socketServer';

// const PORT = process.env['PORT'] || 5000;

// const app = express();
// const server = new http.Server(app);
// socketServer(server);

// app.get('/', (_req, res) => res.send(Date()).status(200));

// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));

import express from "express"
import http from "http"
import socketServer from "./socketServer"

const PORT = process.env["PORT"] || 5000

const app = express()
const server = new http.Server(app)
socketServer(server)

app.get("/", (_req, res) => res.send(Date()).status(200))

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))
