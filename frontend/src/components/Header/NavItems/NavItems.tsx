import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

interface NavItemsProps {
  isMobile?: boolean;
}

const NavItems = ({ isMobile }: NavItemsProps) => {
  return (
    <Box
      display={
        isMobile ? { xs: "flex", sm: "none" } : { xs: "none", sm: "flex" }
      }
      flexDirection={isMobile ? "column" : "row"}
      width={isMobile ? "240px" : "auto"}
    >
      <Button
        color="inherit"
        variant="text"
        startIcon={<LoginIcon />}
        sx={{ mr: 2 }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Sign In
        </Link>
      </Button>
      <Button
        color="inherit"
        variant="text"
        startIcon={<HowToRegIcon />}
        sx={{ mr: 2 }}
      >
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Sign Up
        </Link>
      </Button>
      <Button
        color="inherit"
        variant="text"
        startIcon={<LogoutIcon />}
        sx={{ mr: 2 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default NavItems;
