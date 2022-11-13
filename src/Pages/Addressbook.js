import React from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../Components/ConfirmationModal";
import style from "../Css/addressbook.module.css";
import edit_icon from "../Images/edit_icon.png";
import remove_icon from "../Images/remove_icon.png";
import search_icon from "../Images/search_icon.png";

const Addressbook = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {open && <ConfirmationModal openStatus={open} />}
      <p
        style={{
          position: "absolute",
          width: "206px",
          height: "24px",
          left: "617px",
          top: "110px",
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
        <span
          style={{
            position: "absolute",
            marginTop: "6px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#B1B1B1",
          }}
        >
          Search address here...
        </span>
      </div>

      <div className={style.address_outer_box}>
        <div className={style.address_content}>
          <div className={style.edit_address}>
            <img
              src={edit_icon}
              alt="edit_icon"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={style.remove_address}>
            <img
              src={remove_icon}
              alt="remove_icon"
              onClick={handleOpen}
              style={{ cursor: "pointer" }}
            />
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
