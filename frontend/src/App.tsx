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
      sx={{ padding: "3rem" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {notes.map((note) => (
        <Grid item key={note._id} xs={8} sm={4} md={3} lg={2}>
          <Note note={note} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
