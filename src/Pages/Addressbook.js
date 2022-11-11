import React from "react";
import { Link } from "react-router-dom";
import style from "../Css/addressbook.module.css";
import edit_icon from "../Images/edit_icon.png";
import remove_icon from "../Images/remove_icon.png";
import search_icon from "../Images/search_icon.png";

const Addressbook = (props) => {
  return (
    <>
      <p
        style={{
          position: "absolute",
          width: "206px",
          height: "24px",
          left: "617px",
          top: "110px",
          fontFamily: "'Inter'",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "24px",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Address book
      </p>

      <div className={style.search_box}>
        <img src={search_icon} alt="search_icon" />
      </div>

      <div className={style.address_outer_box}>
        <div className={style.address_content}>
          <div className={style.edit_address}>
            <img src={edit_icon} alt="edit_icon" />
          </div>
          <div className={style.remove_address}>
            <img src={remove_icon} alt="remove_icon" />
          </div>
        </div>
      </div>
      <Link to="/add-address">
        <button className={style.add_new_address_button} type="submit">
          <div className={style.add_new_address_text}>Add new Address</div>
        </button>
      </Link>
    </>
  );
};

export default Addressbook;
