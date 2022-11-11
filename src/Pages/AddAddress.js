import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import style from "../Css/loginpage.module.css";

const AddAddress = (props) => {
  const [inputVal, setInputVal] = useState([]);

  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      firstAddress: "",
      secondAddress: "",
      city: "",
      state: "",
      country: "",
      telephone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last Name is required"),
      firstAddress: Yup.string().required("First address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      telephone: Yup.string().required("Telephone is required"),
    }),

    onSubmit: (values) => {
      inputVal.push(values);
    },
  });

  const inputStyle = {
    paddingTop: "6px",
    width: "210px",
    height: "48px",
    left: "500px",
    top: "355px",
    background: "#c4c4c4",
  };
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
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          Add / Edit Address
        </p>
      </>

      <Box className={style.login_outer_box}>
        <div className={style.login_inner_box}>
          <form onSubmit={formik.handleSubmit}>
            <h5>Address ID : #6978054</h5>
            <Grid container spacing={0}>
              <Grid item xs>
                <label htmlFor="firstName" className={style.title_email}>
                  First name
                </label>

                <input
                  type="text"
                  style={inputStyle}
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />

                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="alert alert-danger mt-2" role="alert">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <div className="mt-3">
                  <label htmlFor="lastName" className={style.title_password}>
                    Last name
                  </label>
                  <input
                    type="text"
                    style={inputStyle}
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="alert alert-danger mt-2" role="alert">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </Grid>
            </Grid>

            <label htmlFor="address" className={style.title_email}>
              Address
            </label>

            <input
              type="text"
              className={style.input_email}
              name="firstAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstAddress}
            />

            {formik.touched.firstAddress && formik.errors.firstAddress ? (
              <div className="alert alert-danger mt-2" role="alert">
                {formik.errors.firstAddress}
              </div>
            ) : null}
            <Box sx={{ mt: 2 }}>
              <input
                type="text"
                className={style.input_email}
                name="secondAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.secondAddress}
              />
            </Box>

            <Grid container spacing={0}>
              <Grid item xs>
                <label htmlFor="city" className={style.title_email}>
                  City
                </label>

                <input
                  type="text"
                  style={inputStyle}
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />

                {formik.touched.city && formik.errors.city ? (
                  <div className="alert alert-danger mt-2" role="alert">
                    {formik.errors.city}
                  </div>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <div className="mt-3">
                  <label htmlFor="state" className={style.title_password}>
                    State
                  </label>
                  <input
                    type="text"
                    style={inputStyle}
                    id="state"
                    name="state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                  />
                </div>
                {formik.touched.state && formik.errors.state ? (
                  <div className="alert alert-danger mt-2" role="alert">
                    {formik.errors.state}
                  </div>
                ) : null}
              </Grid>
            </Grid>

            <label htmlFor="country" className={style.title_email}>
              Country
            </label>
            <input
              type="text"
              className={style.input_email}
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />

            {formik.touched.country && formik.errors.country ? (
              <div className="alert alert-danger mt-2" role="alert">
                {formik.errors.country}
              </div>
            ) : null}
            <label htmlFor="telephone" className={style.title_email}>
              Telephone
            </label>
            <input
              type="tel"
              className={style.input_email}
              name="telephone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telephone}
            />

            {formik.touched.telephone && formik.errors.telephone ? (
              <div className="alert alert-danger mt-2" role="alert">
                {formik.errors.telephone}
              </div>
            ) : null}
            <Link to="/addressbook">
              <button className={style.signin_button} type="submit">
                <div className={style.signin_text}>Save Address</div>
              </button>
            </Link>
          </form>
        </div>
      </Box>
    </>
  );
};

export default AddAddress;
