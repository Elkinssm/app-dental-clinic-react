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
import { getAllDentist, getAllTurn } from "../actions/auth-actions";

const TableTurn = () => {
  const [turn, setTurn] = useState([]);

  useEffect(() => {
    const allTurn = async () => {
      const response = await getAllTurn();
      setTurn(response.data);
    };
    allTurn();
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow align="center">
              <TableCell>Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Dentist Name</TableCell>
              <TableCell>Dentist Last Name</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Patient Last Name</TableCell>
              <TableCell>Dentist DNI</TableCell>
              <TableCell>Edit Turn</TableCell>
              <TableCell>Delete Turn</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {turn.map((row) => (
              <TableRow
                align="center"
                key={row.id}
                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.dentist.name}</TableCell>
                <TableCell>{row.dentist.lastName}</TableCell>
                <TableCell>{row.patient.name}</TableCell>
                <TableCell>{row.patient.lastName}</TableCell>
                <TableCell>{row.patient.dni}</TableCell>
                <TableCell>
                  <EditIcon color="info" />
                </TableCell>
                <TableCell>
                  <DeleteIcon color="error" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableTurn;
