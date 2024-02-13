import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Note } from "../models/note";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { useForm } from "react-hook-form";

interface AddNoteDialogProps {
  noteToEdit?: Note;
  isOpen: boolean;
  onDismiss: () => void;
  onNoteSaved: (note: Note) => void;
}

const AddNoteDialog = ({
  isOpen,
  onDismiss,
  noteToEdit,
  onNoteSaved,
}: AddNoteDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || "",
      text: noteToEdit?.text || "",
    },
  });
  async function onSubmit(data: NoteInput) {
    try {
      let noteResponse: Note;
      if (noteToEdit) {
        noteResponse = await NotesApi.updateNote(noteToEdit._id, data);
      } else {
        noteResponse = await NotesApi.createNote(data);
      }
      onNoteSaved(noteResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={onDismiss}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <DialogTitle sx={{ fontWeight: "400" }}>
        {noteToEdit ? "Edit Note" : "Add Note"}
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <TextField
          autoFocus
          required
          margin="dense"
          label="Title"
          type="text"
          variant="standard"
          {...register("title", { required: true })}
        />
        <TextareaAutosize
          aria-label="Text"
          placeholder="Text"
          minRows={10}
          style={{ fontSize: "1rem", fontFamily: "sans-serif" }}
          {...register("text")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDismiss}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNoteDialog;
