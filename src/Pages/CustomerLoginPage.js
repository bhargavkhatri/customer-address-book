import React, { useState } from "react";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import style from "../Css/loginpage.module.css";

const CustomerLoginPage = (props) => {
  const [inputVal, setInputVal] = useState([]);
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          passwordRegex,
          "Minimum eight characters, at least one  special character and one upper case is needed"
        ),
    }),

    onSubmit: (values) => {
      console.log("values=>", values);
      inputVal.push(values);
    },
  });
  return (
    <>
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
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          Customer Login Page
        </p>
      </>

      <Box className={style.login_outer_box}>
        <div className={style.login_inner_box}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email" className={style.title_email}>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={style.input_email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger mt-2" role="alert">
                {formik.errors.email}
              </div>
            ) : null}
            <div className="mt-3">
              <label htmlFor="password" className={style.title_password}>
                Password
              </label>
              <input
                type="password"
                className={style.input_password}
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="alert alert-danger mt-2" role="alert">
                {formik.errors.password}
              </div>
            ) : null}
            <button className={style.signin_button} type="submit">
              <div className={style.signin_text}>Sign In</div>
            </button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default CustomerLoginPage;
