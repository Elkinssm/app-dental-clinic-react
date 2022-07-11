import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import currencies from "./models";

const TurnRegister = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Turn
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Patient"
                  value={currency}
                  onChange={handleChange}
                  fullWidth
                  helperText="Please select your patient"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Dentist"
                  value={currency}
                  onChange={handleChange}
                  fullWidth
                  helperText="Please select your dentist"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  type="date"
                  label="Date"
                  name="date"
                  // autoComplete="family-name"
                />
              </Grid>
            </Grid>
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

export default TurnRegister;
