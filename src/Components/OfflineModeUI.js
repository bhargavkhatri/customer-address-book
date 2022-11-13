import React from "react";
import Box from "@mui/material/Box";
import style from "../Css/offlinemodeui.module.css";

const OfflineModeUI = (props) => {
  return (
    <>
      <Box className={style.main_box}>
        <div className={style.connection_message}>
          Connection lost. Reconnecting in 5 seconds...
        </div>
        <div className={style.reconnect_button}>
          <div className={style.reconnect_button_text}>Reconnect</div>
        </div>
      </Box>
    </>
  );
};

export default OfflineModeUI;
