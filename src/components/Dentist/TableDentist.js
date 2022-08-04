import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  getAllDentist,
  deleteDentist,
  updateDentist,
} from "../actions/auth-actions";
import { useNavigate } from "react-router-dom";

export const TableDentist = () => {
  const history = useNavigate();
  const [dentist, setDentist] = useState([]);

  const [message, setMessage] = useState({
    description: "",
    textButtonSubmit: "",
    title: "",
    handleClick: () => {},
    handleClickOut: () => {},
    oneButtons: false,
    type: "",
    open: false,
  });

  useEffect(() => {
    const allDentist = async () => {
      const response = await getAllDentist();
      setDentist(response.data);
    };
    allDentist();
  }, []);

  const handleClickOut = () => setMessage({ ...message, open: false });

  const handleClickReset = () => {
    setMessage({ ...message, open: false });
    dentist();
  };
  const onUpdate = () => {
    const data = dentist;
    var dentistUpdate = {
      id: data.id,
      name: data.name,
      lastName: data.lastName,
      registrationNumber: data.registrationNumber,
    };
    console.log(dentistUpdate);
    updateDentist(dentist).then(
      (response) => {
        if (response.status === 200 || response.code === 200) {
          history("/patients-register");
        } else {
        }
      },
      (error) => {}
    );
  };

  const onDelete = async (id) => {
    const response = await deleteDentist(id);
    if (response?.status >= 200 && response?.status < 399) {
      setMessage({
        description: `Usuario eliminado exitosamente`,
        textButtonSubmit: "Aceptar",
        handleClick: () => handleClickReset(),
        type: "SUCCESS",
        oneButtons: true,
        open: true,
      });
    } else if (
      response?.status > 399 &&
      response?.status !== 401 &&
      response?.status !== 403
    ) {
      setMessage({
        description: `Ocurrió un error procesando la solicitud, inténtelo nuevamente`,
        textButtonSubmit: "ACEPTAR",
        handleClick: () => handleClickOut(),
        oneButtons: true,
        type: "WARNING",
        open: true,
      });
    } else {
      setMessage({
        description: `Ocurrió un error procesando la solicitud, inténtelo nuevamente`,
        textButtonSubmit: "ACEPTAR",
        handleClick: () => handleClickOut(),
        oneButtons: true,
        type: "WARNING",
        open: true,
      });
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow align="center">
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Registration Number</TableCell>
              <TableCell>Edit Dentist</TableCell>
              <TableCell>Delete Dentist</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dentist.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                align="center"
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.registrationNumber}</TableCell>
                <TableCell>
                  <EditIcon color="info" onClick={() => onUpdate()} />
                </TableCell>
                <TableCell>
                  <DeleteIcon color="error" onClick={() => onDelete()} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
