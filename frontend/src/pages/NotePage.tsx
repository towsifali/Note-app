import NotesPageLoggedIn from "../components/NotesPageLoggedIn";
import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import { Box } from "@mui/material";
import { User } from "../models/user";

interface NotePageProps {
  loggedInUser: User | null;
}

const NotePage = ({ loggedInUser }: NotePageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <>{loggedInUser ? <NotesPageLoggedIn /> : <NotesPageLoggedOutView />}</>
    </Box>
  );
};

export default NotePage;
