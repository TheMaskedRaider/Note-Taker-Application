const notesDB = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

module.exports = (app) => {

    //retrieves and responds with the parsed note database found in db.json
    app.get("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(notes)
    });

    
    app.post('/api/notes', (req, res) => {

        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        const newNotes = req.body;
        newNotes.id = uuid.v4();
        notes.push(newNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(newNotes);

    });

    app.delete('/api/notes/:id', (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        const delNote = req.params.id;
        let filteredNotes = notes.filter((note) => !(note.id == delNote))

        fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes));
        res.json(filteredNotes);

    })

}