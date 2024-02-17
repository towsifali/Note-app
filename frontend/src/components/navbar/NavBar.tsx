import { AppBar, Box, Button, Container, Typography } from "@mui/material";
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
  const navItems = ["About", "Help"];
  return (
    <AppBar position="static">
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component={"a"}
          href="/"
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
            marginY: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box>
            {navItems.map((item) => (
              <Button
                href={`/${item.toLowerCase()}`}
                key={item}
                sx={{
                  color: "#fff",
                  alignSelf: "center",
                  marginLeft: "1rem",
                  marginTop: "0.75rem",
                  fontSize: "1rem",
                }}
                variant="text"
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              gap: "1rem",
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
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
