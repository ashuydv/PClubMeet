const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});
const cors = require('cors')
const { ExpressPeerServer } = require("peer");

//routes
const newMeeting = require("./routes/newMeeting");

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/myapp'
});

app.use("/peerjs", peerServer);
app.use(cors())
app.use(express.json())

//sample
app.get('/', (req,res) => { res.send("Working....") })

//New Meeting
app.get('/join', (req, res) =>  { newMeeting.handleNewMeeting(req,res) });

io.on("connection", (socket) => {
    //console.log("user connected")
    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId)
    })
} )

server.listen(5000, () => {
    console.log("Server is running...")
})
