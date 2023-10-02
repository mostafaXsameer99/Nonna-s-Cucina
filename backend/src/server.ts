import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import usersRouter from "./routers/user.router";
import { dbConnect } from './configs/database.config';
dbConnect();
const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))


app.use("/api/foods", foodRouter);
app.use("/api/users", usersRouter);


const port = 5000;
app.listen(port, () => {
    console.log("Website Served on http://localhost:" + port);

})