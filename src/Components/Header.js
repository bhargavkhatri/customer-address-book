import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "../Css/header.module.css";

import web_logo from "../Images/web_logo.png";

import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Header = (props) => {
  const { window, isAuth, setIsAuth } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   const userSignOut = () => {
  //     signOut(auth).then(() => {
  //       localStorage.clear();
  //       setIsAuth(false);
  //       // window.location.pathname = "/login";
  //       navigate("/login");
  //     });
  //   };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JustPostIt
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const linkStyle = { textDecoration: "none" };

  return (
    <>
      <Box sx={{ display: "flex" }} className={style.header_box}>
        <div className={style.header_logo}>
          <img src={web_logo} alt="web_logo" width="50px" height="50px" />
          <b>EAddressbook</b>
        </div>
        <div className={style.nav_links}>
          <Link>Sign in</Link>
          <Link>Sign up</Link>
        </div>
      </Box>
    </>
  );
};

export default Header;
