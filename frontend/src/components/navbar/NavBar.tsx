import { AppBar, Box, Container, Typography } from "@mui/material";
import { User } from "../../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
  onLogoutSuccessful: () => void;
}

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful,
}: NavBarProps) => {
  return (
    <AppBar position="static">
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          noWrap
          sx={{
            m: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Arial",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          MERN Notes App
        </Typography>
        <Box
          sx={{
            gap: "1rem",
            marginY: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {loggedInUser ? (
            <NavBarLoggedInView
              user={loggedInUser}
              onLogoutSuccessful={onLogoutSuccessful}
            />
          ) : (
            <NavBarLoggedOutView
              onLoginClicked={onLoginClicked}
              onSignUpClicked={onSignUpClicked}
            />
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;