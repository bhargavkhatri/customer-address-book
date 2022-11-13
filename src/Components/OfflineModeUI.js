import React from "react";
import Box from "@mui/material/Box";
import style from "../Css/offlinemodeui.module.css";

const OfflineModeUI = (props) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Box className={style.main_box}>
        <div className={style.connection_message}>
          Connection lost. Reconnecting in 5 seconds...
        </div>
        <button className={style.reconnect_button} onClick={refreshPage}>
          <div className={style.reconnect_button_text}>Reconnect</div>
        </button>
      </Box>
    </>
  );
};

export default OfflineModeUI;
