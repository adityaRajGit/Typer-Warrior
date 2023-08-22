// import * as http from 'http';
// import { Server } from 'socket.io';
// import registerSocketEvents from './socketEvents';

// const socketServer = (server: http.Server): Server => {
//     const io = new Server(server, { cors: { origin: '*' } });

//     io.on('connection', socket => {
//         console.log(`[+] ${socket.id}`);

//         registerSocketEvents(io, socket);

//         socket.on('disconnect', () => console.log(`[-] ${socket.id}`));
//     });

//     return io;
// };

// export default socketServer;



import { Server } from "socket.io"
import registerSocketEvents from "./socketEvents"

const socketServer = server => {
  const io = new Server(server, { cors: { origin: "*" } })

  io.on("connection", socket => {
    console.log(`[+] ${socket.id}`)

    registerSocketEvents(io, socket)

    socket.on("disconnect", () => console.log(`[-] ${socket.id}`))
  })

  return io
}

export default socketServer
