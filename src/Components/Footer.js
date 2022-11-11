import React from "react";
import style from "../Css/footer.module.css";
import { Box } from "@mui/material";
import facebook_icon from "../Images/facebook_icon.png";
import instagram_icon from "../Images/instagram_icon.png";
import twitter_icon from "../Images/twitter_icon.png";
import pintrest_icon from "../Images/pintrest_icon.png";

const Footer = (props) => {
  return (
    <>
      <Box className={style.footer_box}>
        <p className={style.cookiepolicy_content}>
          Cookie Policy - Legal Notice
        </p>
        <p className={style.copyright_content}>
          Copyright © 2021. Made with ♥ from seepossible
        </p>
        <div className={style.social_links}>
          <img src={facebook_icon} alt="facebook_icon" />
          <img src={instagram_icon} alt="instagram_icon" />
          <img src={twitter_icon} alt="twitter_icon" />
          <img src={pintrest_icon} alt="pintrest_icon" />
        </div>
      </Box>
    </>
  );
};

export default Footer;
