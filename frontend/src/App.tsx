import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import * as NotesApi from "./network/notes_api";
import Grid from "@mui/material/Grid";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <Grid
      container
      spacing={10}
      columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      margin={0}
    >
      {notes.map((note) => (
        <Grid item key={note._id}>
          <Note note={note} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
