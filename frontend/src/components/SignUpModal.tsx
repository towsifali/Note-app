import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/notes_api";
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
import { Margin } from "@mui/icons-material";
import { useState } from "react";
import { ConflictError } from "../errors/http_errors";

interface SignUpModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  onSignUpSuccessful: (user: User) => void;
}
export const SignUpModal = ({
  isOpen,
  onDismiss,
  onSignUpSuccessful,
}: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCredentials>();

  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit(credentials: SignUpCredentials) {
    try {
      const newUser = await NotesApi.signUp(credentials);
      onSignUpSuccessful(newUser);
    } catch (error) {
      if (error instanceof ConflictError) {
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
      <DialogTitle sx={{ fontWeight: "400" }}>Sign Up</DialogTitle>
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
          label="Email"
          type="email"
          variant="outlined"
          {...register("email", { required: true })}
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
          Sign up
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
