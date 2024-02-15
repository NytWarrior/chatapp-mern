import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());    //to parse the incoming request with JSON payload(from req.body)
app.use(cookieParser());    //to parse the cookie

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", usersRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
})