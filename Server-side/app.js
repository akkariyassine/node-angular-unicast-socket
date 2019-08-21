const express = require("express");

const app = express();
const server = app.listen(3000);

const io = require("socket.io").listen(server);

const router = express.Router();

const bodyParser = require("body-parser");
const cors = require("cors");

//const chat = require("./routes/chat")(router);
const notification = require("./routes/notification")(router);

app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.set("socketio", io);

/////////////////////////////////////////////////////
io.on("connection", socket => {
  console.log("new connection made");
});
/////////////////////////////////////////////////////

app.use("/notification", notification);

//app.use("/chat", chat);
