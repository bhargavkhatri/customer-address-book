import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import style from "../Css/header.module.css";

import web_logo from "../Images/web_logo.png";
import { Link } from "@mui/material";

// import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { window, isAuth, setIsAuth } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const navigate = useNavigate();

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
          <Link href="" underline="none" sx={{ ml: 2, color: "#000000" }}>
            Sign in
          </Link>
          <Link href="" underline="none" sx={{ ml: 2, color: "#000000" }}>
            Sign up
          </Link>
        </div>
      </Box>
    </>
  );
};

export default Header;
