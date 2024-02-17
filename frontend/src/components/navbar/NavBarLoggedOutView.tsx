import { Button } from "@mui/material";

interface NavBarLoggedOutViewProps {
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
}

const NavBarLoggedOutView = ({
  onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedOutViewProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked} variant="contained">
        Sign Up
      </Button>
      <Button onClick={onLoginClicked} variant="contained">
        Log In
      </Button>
    </>
  );
};

export default NavBarLoggedOutView;
