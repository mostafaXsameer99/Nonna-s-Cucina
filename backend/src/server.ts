import express from "express";
import cors from "cors";
import { sample_dishes, sample_tags } from "./data";

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.get("/api/foods", (req, res) => {
    res.send(sample_dishes)
})

app.get("/api/foods/search/:key", (req, res) => {
    const key = req.params.key;
    const foods = sample_dishes.filter(food => food.name.toLowerCase().includes(key.toLowerCase()));
    res.send(foods);
})

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/foods/tag/:tag", (req, res) => {
    const tag = req.params.tag;
    const foods = sample_dishes.filter(food => food.tags?.includes(tag));
    res.send(foods);
})

app.get("/api/food/:foodID", (req, res) => {
    const foodId = req.params.foodID;
    const foods = sample_dishes.find(food => food.id == foodId);
    res.send(foods);
})


const port = 5000;
app.listen(port, () => {
    console.log("Website Served on http://localhost:" + port);

})