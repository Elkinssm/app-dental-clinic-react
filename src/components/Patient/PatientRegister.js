import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { registerPatient } from "../actions/auth-actions";
import { useNavigate } from "react-router-dom";

export const PatientRegister = () => {
  const history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var patient = {
      name: data.get("name"),
      lastName: data.get("lastName"),
      admissionsDate: data.get("admissionsDate".toString()),
      dni: data.get("dni"),
      address: {
        street: data.get("street"),
        number: data.get("number"),
        locality: data.get("locality"),
        province: data.get("province"),
      },
    };
    registerPatient(patient).then(
      (response) => {
        if (response.status === 201 || response.code === 201) {
          history("/patients");
        } else {
        }
      },
      (error) => {}
    );
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddAlt1OutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Patient
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dni"
                  label="DNI"
                  name="dni"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="admmisionsDate"
                  type="date"
                  label="Admmision Date"
                  name="admmisionsDate"
                  // autoComplete="family-name"
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Address
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="street"
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Number"
                  name="number"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="locality"
                  label="Locality"
                  name="locality"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="province"
                  label="Province"
                  name="province"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            ></Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

/*
{
  "id": 0,
  "name": "string",
  "lastName": "string",
  "admissionsDate": "string",
  "address": {
    "id": 0,
    "street": "string",
    "number": "string",
    "locality": "string",
    "province": "string"
  },
  "dni": "string"
}
*/
