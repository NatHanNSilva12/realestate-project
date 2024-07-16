import { createServer } from 'http';
import express from "express";
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"

const app = express();
const server = createServer(app);

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use("/api/test", (req, res)=>{
    res.send("Funciona!")
})

app.listen(8800, () => {
    console.log("Servidor rodando!");
});

