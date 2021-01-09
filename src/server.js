import {join} from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views")); // views 디렉토리 지정
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static"))); // static 사용할 디렉토리 지정
app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`✅ Server Running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => socketController(socket));
