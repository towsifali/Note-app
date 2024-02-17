import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
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
          variant="h4"
          noWrap
          sx={{
            alignSelf: "center",
            display: "flex",
            fontFamily: "Arial",
            fontWeight: 400,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          MERN Notes
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
