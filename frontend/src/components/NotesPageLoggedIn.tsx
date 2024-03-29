import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "../models/note";
import Note from "../components/Note";
import * as NotesApi from "../network/notes_api";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddNoteDialog from "../components/AddNoteDialog";
import { Spinner } from "react-bootstrap";

const NotesPageLoggedIn = () => {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [notesLoading, setNotesLoading] = useState(true);
  const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null);

  useEffect(() => {
    async function loadNotes() {
      try {
        setShowNotesLoadingError(false);
        setNotesLoading(true);
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        setShowNotesLoadingError(true);
      } finally {
        setNotesLoading(false);
      }
    }
    loadNotes();
  }, []);
  async function deleteNote(note: NoteModel) {
    try {
      await NotesApi.deleteNote(note._id);
      setNotes(notes.filter((existingNote) => existingNote._id !== note._id));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  const notesGrid = (
    <Grid container direction="row" justifyContent="start" alignItems="center">
      {notes.map((note) => (
        <Grid padding={"3rem"} item key={note._id} xs={12} sm={6} md={4}>
          <Note
            note={note}
            onDeleteNoteClicked={deleteNote}
            onNoteClicked={(n) => {
              setNoteToEdit(n);
              setShowAddNoteDialog(true);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
  return (
    <>
      <Button
        size="medium"
        sx={{
          alignSelf: "center",
          marginTop: "1rem",
          marginBottom: "0",
          textTransform: "none",
        }}
        variant="contained"
        onClick={() => setShowAddNoteDialog(true)}
      >
        <AddIcon fontSize="small" sx={{ marginRight: "0.3rem" }} />
        Add New Note
      </Button>
      {notesLoading && <Spinner animation="border" variant="primary" />}
      {showNotesLoadingError && (
        <p>Error loading notes. Please refresh the page</p>
      )}
      {!notesLoading && !showNotesLoadingError && (
        <>{notes.length > 0 ? notesGrid : <p>No notes yet!</p>}</>
      )}
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
      {noteToEdit && (
        <AddNoteDialog
          noteToEdit={noteToEdit}
          isOpen={showAddNoteDialog}
          onDismiss={() => {
            setShowAddNoteDialog(false);
            setNoteToEdit(null);
          }}
          onNoteSaved={(updatedNote) => {
            setNotes(
              notes.map((note) =>
                note._id === updatedNote._id ? updatedNote : note
              )
            );
            setNoteToEdit(null);
            setShowAddNoteDialog(false);
          }}
        />
      )}
    </>
  );
};

export default NotesPageLoggedIn;
