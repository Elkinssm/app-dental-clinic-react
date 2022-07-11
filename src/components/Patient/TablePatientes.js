import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Tooltip,
} from "@mui/material";
import { getAllPatients } from "../actions/auth-actions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TablePatientes = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const allPatient = async () => {
      const response = await getAllPatients();
      setPatients(response.data);
    };
    allPatient();
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
              <TableCell>Admissions Date</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Locality</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Province</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Edit Patient</TableCell>
              <TableCell>Delete Patient </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                align="center"
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.admissionsDate}</TableCell>
                <TableCell>{row.dni}</TableCell>
                <TableCell>{row.address.locality}</TableCell>
                <TableCell>{row.address.number}</TableCell>
                <TableCell>{row.address.province}</TableCell>
                <TableCell>{row.address.street}</TableCell>
                <TableCell>
                  <Tooltip title="Editar" arrow placement="top">
                    <EditIcon color="info" />
                  </Tooltip>
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

export default TablePatientes;
