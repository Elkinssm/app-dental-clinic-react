import * as React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LocalHospitalSharpIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dental Clinic
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="/patients">
            Patients
          </Button>
          <Button color="inherit" href="/dentist">
            Dentist
          </Button>
          <Button color="inherit" href="/turn">
            Turn
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
