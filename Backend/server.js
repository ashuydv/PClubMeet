const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: '*'
    }
});
const { v4: uuidV4 } = require('uuid')
const cors = require('cors')
const { ExpressPeerServer } = require("peer");

const peerServer = ExpressPeerServer(server, {
    debug: true,
});

app.use("/peerjs", peerServer);
app.use(cors())
app.use(express.json())

app.get('/',newMeeting);

io.on("connection", (socket) => {
    //console.log("user connected")
    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId)
    })
} )

server.listen(5000, () => {
    console.log("Server is running...")
})