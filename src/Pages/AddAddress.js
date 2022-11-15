import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../Css/addaddress.module.css";
import { gql, useMutation } from "@apollo/client";

// For add address

// const ADD_ADDRESS = gql`
//   mutation ($firstname: String!, $lastname: String!, telephone: String!,city: String!) {
//     createCustomerAddress(
//       input: {
//         region: { region_id: 7 },
//         country_code: US,
//         street: ["123 Main Street"],
//         telephone: $telephone,
//         postcode: "77777",
//         city: $city,
//         firstname: $firstname,
//         lastname: $lastname,
//         default_shipping: true,
//         default_billing: false
//       }
//     ) {
//       id
//       region {
//         region
//         region_code
//       }
//       country_code
//       street
//       telephone
//       postcode
//       city
//       default_shipping
//       default_billing
//     }
//   }
// `;

const AddAddress = (props) => {
  const [addressId, setAddressId] = React.useState();

  // const [createCustomerAddress, { data, loading, error }] =
  //   useMutation(ADD_ADDRESS);

  //For auto generate AddressId
  const generateAddressId = () => {
    setAddressId(("" + Math.random()).substring(2, 9));
  };

  useEffect(() => {
    generateAddressId();
  }, []);

  // For validation
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
      lastName: Yup.string().required("Last name is required"),
      firstAddress: Yup.string().required("First address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      telephone: Yup.string()
        .required("Telephone is required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Telephone number is not valid"
        ),
    }),

    onSubmit: (values, { resetForm }) => {
      const { firstName, lastName, city, telephone } = values;
      // createCustomerAddress({
      //   variables: {
      //     firstname: firstName,
      //     lastname: lastName,
      //     telephone: telephone,
      //     city: city,
      //   },
      // });
      resetForm({ values: "" });
    },
  });

  const inputStyle = {
    paddingTop: "6px",
    width: "200px",
    height: "48px",
    left: "500px",
    top: "355px",
    background: "#c4c4c4",
    border: "none",
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
          <form onSubmit={formik.handleSubmit} style={{ paddingLeft: "17px" }}>
            <h5>Address ID : #{addressId}</h5>
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
              type="number"
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

            <button className={style.signin_button} type="submit">
              <div className={style.signin_text}>Save Address</div>
            </button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default AddAddress;
