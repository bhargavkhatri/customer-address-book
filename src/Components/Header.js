import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import style from "../Css/header.module.css";
import OfflineModeUI from "./OfflineModeUI";
import web_logo from "../Images/web_logo.png";

import { Link } from "@mui/material";

// import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { window, isAuth, setIsAuth } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [connectionStatus, setConnectionStatus] = React.useState();

  console.log("connectionStatusOuter=>", connectionStatus);

  useEffect(() => {
    setConnectionStatus(navigator.onLine);
  }, [navigator.onLine]);

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
          <b
            style={{
              position: "absolute",
              marginTop: "7.5px",
              fontFamily: "cursive",
            }}
          >
            EAddressbook
          </b>
        </div>
        {!connectionStatus ? <OfflineModeUI /> : null}
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
