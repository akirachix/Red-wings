import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, location, date, blood_type) {
  return { name, location, date, blood_type };
}

const rows = [
  createData("Charity Kishoiyan","Nairobi", "2nd.3.2029", "A-"),
  createData("Gumato Roba", "Kinangop", "13th.10.2020", "AB"),
  createData("Lucy Karimi", "Marsabit", "2nd.11.2021", "A+"),
  createData("Speria Njeri","Meru", "12th.10.2022", "O"), 
  createData("Joyce Wanjiku","Narok", "12th.10.2022", "B"),


];

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Donors</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Blood_type</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.blood_type}</TableCell>

                  <TableCell align="left">
                    {/* <span className="status" style={makeStyle(row.status)}>{row.status}</span> */}
                  </TableCell>
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
