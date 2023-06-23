import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import DrawerMobile from "./DrawerMobile/DrawerMobile";
import NavItems from "./NavItems/NavItems";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static" elevation={24}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {" "}
                MERN STACK{" "}
              </Link>
            </Typography>
            <NavItems />

            <DrawerMobile isOpened={isOpened} setIsOpened={setIsOpened} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
