import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { SignUpModal } from "./components/SignUpModal";
import { User } from "./models/user";
import LoginModal from "./components/LoginModal";
import * as NotesApi from "./network/notes_api";
import NavBar from "./components/navbar/NavBar";
import NotesPageLoggedIn from "./components/NotesPageLoggedIn";
import NotesPageLoggedOutView from "./components/NotesPageLoggedOutView";

function App() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <>
      <NavBar
        loggedInUser={loggedInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLoggedInUser(null)}
      />
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
      {showSignUpModal && (
        <SignUpModal
          isOpen={true}
          onDismiss={() => {
            setShowSignUpModal(false);
          }}
          onSignUpSuccessful={(user) => {
            setLoggedInUser(user);
            setShowSignUpModal(false);
          }}
        />
      )}
      {showLoginModal && (
        <LoginModal
          isOpen={true}
          onDismiss={() => {
            setShowLoginModal(false);
          }}
          onLoginSuccessful={(user) => {
            setLoggedInUser(user);
            setShowLoginModal(false);
          }}
        />
      )}
    </>
  );
}

export default App;
