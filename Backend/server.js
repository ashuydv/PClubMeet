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

app.get('/', (req, res) => {
    res.send("Hello World")
})

server.listen(5000, () => {
    console.log("Server is running...")
})

app.use(cors());
app.listen(port, () => console.log('Backend Server live on ' + port));

app.get('/', (req, res) => {
    res.send({ message: 'We did it!' })
})