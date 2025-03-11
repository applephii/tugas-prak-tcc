import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Note = db.define("note", {
    author: Sequelize.STRING,
    title: Sequelize.STRING,
    notes: Sequelize.TEXT,
})

db.sync().then(() => console.log("Database is syncronised..."));

export default Note;