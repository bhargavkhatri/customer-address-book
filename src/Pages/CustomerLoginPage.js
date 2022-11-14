import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import style from "../Css/loginpage.module.css";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

// For Login mutation

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

const CustomerLoginPage = (props) => {
  const [generateCustomerToken, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    localStorage.setItem(
      "token",
      JSON.stringify(data?.generateCustomerToken?.token)
    );
  }, [data]);

  useEffect(() => {
    if (data?.generateCustomerToken?.token) {
      toast.success("Login has been completed successfully");
      navigation("/addressbook");
    }
  }, [data?.generateCustomerToken?.token]);

  const passwordRegex = /^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const navigation = useNavigate();

  // For validation
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
          "A minimum of eight characters and at least one  special character are needed"
        ),
    }),

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      generateCustomerToken({
        variables: { email: email, password: password },
      });

      resetForm({ values: "" });
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
            fontStyle: "normal",
            fontWeight: "600",
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
          <form onSubmit={formik.handleSubmit} style={{ paddingLeft: "17px" }}>
            <label htmlFor="email" className={style.title_email}>
              Email
            </label>

            <input
              type="email"
              className={style.input_email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger mt-2">
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
