import express from "express";
import cors from "cors";
import router from "./route/NoteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server is connected..."));