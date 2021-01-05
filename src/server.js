import {join} from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views")); // views 디렉토리 지정
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => {
  res.render("home");
});

const handleListening = () => {
  console.log(`✅ Server Running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);
