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
import { getAllDentist } from "../actions/auth-actions";

export const TableDentist = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const allDentist = async () => {
      const response = await getAllDentist();
      setDentist(response.data);
    };
    allDentist();
  }, []);
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
