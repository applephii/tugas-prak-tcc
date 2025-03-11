import express from "express";
import { createNote, deleteNote, getNote, getNote1, updateNote } from "../controller/NoteController.js";

const router = express.Router();

router.get("/notes", getNote);
router.post("/add-note", createNote);
router.put("/edit-note/:id_note", updateNote);
router.delete("/delete-note/:id_note", deleteNote);
router.get("/note/:id_note", getNote1);

export default router;