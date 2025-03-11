const noteForm = document.getElementById('noteForm');
const inputAuthor = document.getElementById('inputAuthor');
const inputTitle = document.getElementById('inputTitle');
const inputNotes = document.getElementById('inputNotes');
const notesTable = document.getElementById('notesTable');

const backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function () {
        window.history.back();
    });
}

if (notesTable) {
    const notesTableBody = document.getElementById('notesTable').getElementsByTagName('tbody')[0];
    async function fetchNotes() {
        try {
            const response = await fetch('http://localhost:3000/notes');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const notes = await response.json();
            displayNotes(notes);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }
    
    
    // display notes
    function displayNotes(notes) {
        notesTableBody.innerHTML = '';
        notes.forEach(note => {
            const newRow = notesTableBody.insertRow();
            const authorCell = newRow.insertCell(0);
            const titleCell = newRow.insertCell(1);
            const noteCell = newRow.insertCell(2);
            const actionCell = newRow.insertCell(3);
    
            authorCell.textContent = note.author;
            titleCell.textContent = note.title;
            noteCell.textContent = note.notes;
            
            // Edit button
            const editButton = document.createElement('button');
            editButton.className = 'edit-button';
            editButton.textContent = 'Edit';
            editButton.onclick = function() {
            window.location.href = `edit-note.html?id=${note.id}`;
        };

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteNoteFromDB(note.id, newRow);
        };

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        });
    }

    // delete
    function deleteNoteFromDB(noteId, row) {
        fetch(`http://localhost:3000/delete-note/${noteId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                row.remove();
                alert('Note deleted successfully!');
            } else {
                console.error('Failed to delete the note');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    fetchNotes();
}

// Add a new note
if (noteForm) {
    noteForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newNote = {
            author: document.getElementById('inputAuthor').value,
            title: document.getElementById('inputTitle').value,
            notes: document.getElementById('inputNotes').value
        };

        try {
            const response = await fetch('http://localhost:3000/add-note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newNote)
            });

            if (response.ok) {
                document.getElementById('inputAuthor').value = '';
                document.getElementById('inputTitle').value = '';
                document.getElementById('inputNotes').value = '';
                alert('Note added successfully!');
                window.location.href = 'index.html';
            } else {
                console.error('Error adding note:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding note:', error);
        }
    });
}

// edit logic
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const noteId = urlParams.get('id');


    if (noteId) {
        try {
            const response = await fetch(`http://localhost:3000/note/${noteId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const note = await response.json();
            document.getElementById('inputAuthor').value = note.author;
            document.getElementById('inputTitle').value = note.title;
            document.getElementById('inputNotes').value = note.notes;
            inputNotes.dispatchEvent(new Event('input'));
            
            // Handle form submission
            const editNoteForm = document.getElementById('editNoteForm');
            editNoteForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                const updatedNote = {
                    author: document.getElementById('inputAuthor').value,
                    title: document.getElementById('inputTitle').value,
                    notes: document.getElementById('inputNotes').value
                };

                try {
                    const updateResponse = await fetch(`http://localhost:3000/edit-note/${noteId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedNote)
                    });

                    if (updateResponse.ok) {
                        alert('Note edited successfully!');
                        window.location.href = 'index.html';
                    } else {
                        console.error('Error updating note:', updateResponse.statusText);
                    }
                } catch (error) {
                    console.error('Error updating note:', error);
                }
            });
        } catch (error) {
            console.error('Error fetching note:', error);
        }
    }
});

const textarea = document.getElementById('inputNotes');
if (textarea) {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
    });
}