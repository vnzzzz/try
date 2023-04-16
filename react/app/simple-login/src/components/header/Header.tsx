import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// material
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

// authentication
import { AuthUserContextType } from "../types/auth";
import { useAuthUserContext } from "../Auth/AuthUser";

export const Header: FC = () => {
  const navigate = useNavigate();
  const authUser: AuthUserContextType = useAuthUserContext();
  // cookie
  const [cookies, setCookie, removeCookie] = useCookies();

  // logout handler
  const handlerLogout = async () => {
    removeCookie("resultCode");
    removeCookie("access_token");
    authUser.signout(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Simple Login</Typography>
            <Button color="inherit">
              <Link to={"/"}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to={"/dashboard"}>Dashboard</Link>{" "}
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />{" "}
            <Button color="inherit" onClick={handlerLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
