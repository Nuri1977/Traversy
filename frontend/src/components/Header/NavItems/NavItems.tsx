import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

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
        Sign In
      </Button>
      <Button
        color="inherit"
        variant="text"
        startIcon={<HowToRegIcon />}
        sx={{ mr: 2 }}
      >
        Sign Up
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
