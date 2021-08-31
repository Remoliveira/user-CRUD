import express from "express"
import mongoose from "mongoose"
import { router } from "./routes"

const app = express();

app.use(express.json())

app.use(router)


// mongoose.connect('mongodb://mongodb-app:27017/hvex?authSource=admin').then(res => console.log(res))

mongoose.connect('mongodb://admin:admin@mongodb-app:27017/?authSource=admin').then(res => console.log("Database Connected"))
app.listen(3333, () => console.log("Running on port 3333"));