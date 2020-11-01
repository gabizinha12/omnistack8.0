const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("Nova conexão", socket.id);
});

mongoose.connect(
  "mongodb+srv://omnistack:gabizinha12@cluster0.uxwtd.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
