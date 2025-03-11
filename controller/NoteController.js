import Note from "../model/NoteModel.js";

// read data
async function getNote(req, res) {
    try {
        const result = await Note.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
}

// create data
async function createNote(req, res) {
    try {
        const inputResult = req.body;
        Note.create(inputResult);
        res.status(201).json({
            success: true,
            message: "Note is successfully added!"
        })
    } catch (error) {
        console.log(error.message);
    }
}

// update data
async function updateNote(req, res) {
    try {
        const editData = req.body;
        const id = req.params.id_note;

        await Note.update(editData, {
            where: {
                id
            },
        });

        res.status(200).json({
            success: true,
            message: "Note is successfully updated!"
        });
    } catch (error) {
        console.log(error.message);
    }
}

// delete data
async function deleteNote(req, res) {
    try {
        const id = req.params.id_note;

        await Note.destroy({
            where: {
                id
            },
        });

        res.status(200).json({
            success: true,
            message: "Note is successfully deleted!"
        });
    } catch (error) {
        console.log(error.message);
    }
}

// get a note (id)
async function getNote1(req, res) {
    const id = req.params.id_note;
    try {
        const note = await Note.findOne({
            where: {
                id
            },
        });

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
    }
}

export { getNote, createNote, updateNote, deleteNote, getNote1 };