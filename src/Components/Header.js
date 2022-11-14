import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import style from "../Css/header.module.css";
import OfflineModeUI from "./OfflineModeUI";
import web_logo from "../Images/web_logo.png";

import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

// For logout mutation

const LOGOUT = gql`
  mutation {
    revokeCustomerToken {
      result
    }
  }
`;
const Header = (props) => {
  const { window, isAuth, setIsAuth } = props;

  const [revokeCustomerToken, { data, loading, error }] = useMutation(LOGOUT);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [connectionStatus, setConnectionStatus] = React.useState();

  const navigate = useNavigate();

  // For fetch current connection status

  useEffect(() => {
    setConnectionStatus(navigator.onLine);
  }, [navigator.onLine]);

  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage?.clear();
    revokeCustomerToken();
    navigate("/");
  };

  const handleMainpage = () => {
    navigate("/");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }} className={style.header_box}>
        <div className={style.header_logo} onClick={handleMainpage}>
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
          <Link
            href=""
            underline="none"
            sx={{ ml: 2, color: "#000000" }}
          ></Link>
          {token ? (
            `Welcome,`
          ) : (
            <Link href="" underline="none" sx={{ ml: 2, color: "#000000" }}>
              Sign in
            </Link>
          )}

          {token ? (
            <Link
              href=""
              underline="none"
              sx={{ ml: 2, color: "#000000" }}
              onClick={handleLogout}
            >
              Log out
            </Link>
          ) : (
            <Link href="" underline="none" sx={{ ml: 2, color: "#000000" }}>
              Sign up
            </Link>
          )}
        </div>
      </Box>
    </>
  );
};

export default Header;
