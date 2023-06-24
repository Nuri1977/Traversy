import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout, selectUserInfo } from "../../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../../redux/slices/userApiSlice";

interface NavItemsProps {
  isMobile?: boolean;
}

const NavItems = ({ isMobile }: NavItemsProps) => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUserInfo);
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall("nuri").unwrap();
      dispatch(logout());
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error?.error?.message);
    }
  };

  return (
    <Box
      display={
        isMobile ? { xs: "flex", sm: "none" } : { xs: "none", sm: "flex" }
      }
      flexDirection={isMobile ? "column" : "row"}
      width={isMobile ? "240px" : "auto"}
    >
      {!userInfo ? (
        <>
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
        </>
      ) : (
        <>
          <Button
            color="inherit"
            variant="text"
            startIcon={<AccountCircleIcon />}
            sx={{ mr: 2 }}
          >
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Profile
            </Link>
          </Button>

          <Button
            color="inherit"
            variant="text"
            startIcon={<LogoutIcon />}
            sx={{ mr: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavItems;
