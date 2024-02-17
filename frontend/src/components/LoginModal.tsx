import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LogInCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";

interface LoginModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  onLoginSuccessful: (user: User) => void;
}
const LoginModal = ({
  isOpen,
  onDismiss,
  onLoginSuccessful,
}: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInCredentials>();

  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit(credentials: LogInCredentials) {
    try {
      const user = await NotesApi.login(credentials);
      onLoginSuccessful(user);
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
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
      <DialogTitle sx={{ fontWeight: "400" }}>Log In</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        {errorText && <Alert severity="error">{errorText}</Alert>}
        <TextField
          autoFocus
          required
          margin="dense"
          label="Username"
          type="text"
          variant="outlined"
          {...register("username", { required: true })}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          label="Password"
          type="password"
          variant="outlined"
          {...register("password", { required: true })}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button
          sx={{ margin: "5px", width: "50%" }}
          disabled={isSubmitting}
          variant="contained"
          type="submit"
          size="large"
        >
          Log in
        </Button>
        <Button
          sx={{ margin: "5px", width: "25%" }}
          variant="outlined"
          onClick={onDismiss}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
