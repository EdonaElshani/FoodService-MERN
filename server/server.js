const express = require("express");
const cors = require("cors");
const app = express();
const socket = require("socket.io");
const Food = require("./models/food.model");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/food.routes")(app);

const server = app.listen(8000, () => {
  console.log("Listening on port 8000");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    allowedHeaders: ["*"],
    method: ['GET', 'POST'],
    Credential: true,
  },
});

io.on("connection", (socket) => {
  console.log("NEW USER: ", socket.id);
  socket.on("deletedFood", (payLoad) => {
    Food.deleteOne({ _id: payLoad })
      .then((deletedFood) => {
        io.emit("foodDeleted", payLoad);
      })
      .catch((err) => {
        io.emit("deletionError", { err });
      });
  });
  socket.on("disconnect", (socket) => {
    console.log(`User: ${socket.id} disconnected`);
  });
});
