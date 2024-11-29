document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText) {
        const notesContainer = document.getElementById('notesContainer');

        // Create a new note element
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        // Create a text node for the note
        const noteContent = document.createTextNode(noteText);
        noteDiv.appendChild(noteContent);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            notesContainer.removeChild(noteDiv);
        };

        noteDiv.appendChild(deleteButton);
        notesContainer.appendChild(noteDiv);

        // Clear the input
        noteInput.value = '';
    } else {
        alert('Please enter a note!');
    }
});