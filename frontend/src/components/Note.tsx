import { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface NoteProps {
  note: NoteModel;
  onNoteClicked: (note: NoteModel) => void;
  onDeleteNoteClicked: (note: NoteModel) => void;
}

const Note = ({ note, onNoteClicked, onDeleteNoteClicked }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created: " + formatDate(createdAt);
  }

  return (
    <Card
      onClick={() => {
        onNoteClicked(note);
      }}
      sx={{
        backgroundColor: "cornsilk",
        transition: "box-shadow .2s ease-in-out",
        cursor: "pointer",
        alignItems: "center",
        padding: "0",
        "&:hover": {
          boxShadow:
            " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            overflow: "hidden",
            maskImage: "linear-gradient(180deg, #000 60%, transparent)",
            height: "200px",
            minWidth: "150px",
            width: "250px",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                      sans-serif"
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            margin={"0.5rem 0"}
            component="p"
            whiteSpace={"pre-line"}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                      sans-serif"
          >
            {text}
          </Typography>
        </CardContent>
        <hr style={{ marginBottom: "0px" }} />
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="caption" color="textSecondary">
          {createdUpdatedText}
        </Typography>
        <DeleteIcon
          onClick={() => {
            onDeleteNoteClicked(note);
          }}
        />
      </CardActions>
    </Card>
  );
};

export default Note;
