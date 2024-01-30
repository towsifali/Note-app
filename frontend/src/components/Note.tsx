import { Note as NoteModel } from "../models/note";
import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";

interface NoteProps {
  note: NoteModel;
}

const Note = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;
  return (
    <Card className={styles.noteCard}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Title className={styles.noteCard}>{note.text}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Note;
