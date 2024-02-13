import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import * as NotesApi from "./network/notes_api";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import AddNoteDialog from "./components/AddNoteDialog";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}
    >
      <Button
        size="medium"
        sx={{ alignSelf: "center", marginTop: "1rem", marginBottom: "0" }}
        variant="contained"
        onClick={() => setShowAddNoteDialog(true)}
      >
        Add Note
      </Button>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {notes.map((note) => (
          <Grid padding={"3rem"} item key={note._id} xs={12} sm={6} md={4}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
      {showAddNoteDialog && (
        <AddNoteDialog
          isOpen={showAddNoteDialog}
          onDismiss={() => {
            setShowAddNoteDialog(false);
          }}
          onNoteSaved={(note) => {
            setNotes([...notes, note]);
            setShowAddNoteDialog(false);
          }}
        />
      )}
    </Box>
  );
}

export default App;
