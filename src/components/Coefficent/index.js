import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function BasicTable() {
  const tableHeader = [
    "Name",
    "T1ART",
    "T1AED",
    "T1PWS",
    "T2ART",
    "T2AED",
    "T2TIME",
    "T2ERRCT",
    "T2PERNOT",
    "T3ERRCT",
    "T4TOTAL",
    "T4RIGHT",
    "T3LEFT",
    "EDIT",
  ];
  let products = [
    {
      guide: "IphoneMean",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
    },
    {
      guide: "IphoneMean",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
    },
  ];

  const renderTable = () => {
    return (
      //   <Container maxWidth="lg">
      <TableContainer style={{ border: "1px solid #e4e4e4" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((val) => (
                <TableCell
                  style={{ minWidth: "50px", fontSize: "12px" }}
                  align="center"
                >
                  {val}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ minWidth: "50px", fontSize: "12px" }}
                  align="center"
                >
                  {row.guide}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.fname}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.testVersion}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.believedImpaired}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.fullAttention}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.testStart}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.gsTScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ minWidth: "50px", fontSize: "12px" }}
                >
                  {row.classicScore}
                </TableCell>

                <TableCell align="center" style={{ minWidth: "130px" }}>
                  <Button
                    style={{
                      height: "30px",
                      backgroundColor: "#1ab394",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      //   </Container>
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          marginBottom: "30px",
          height: "100px",
          textAlign: "left",
          paddingRight: "10px",
          paddingLeft: "10px",
          alignSelf: "center",
          paddingTop: "0.5px",
        }}
      >
        <p style={{ fontWeight: "100", fontSize: "23px", color: "#676A6C" }}>
          Coefficent
        </p>
        <p style={{ marginTop: "-20px", fontSize: "15px", color: "#676A6C" }}>
          Dashboard
        </p>
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#fff",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <p
          style={{
            borderBottom: "1px solid #e4e4e4",
            fontSize: "16px",
            paddingLeft: "4px",
          }}
        >
          iPhone Record
        </p>
        {renderTable()}
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#fff",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <p
          style={{
            borderBottom: "1px solid #e4e4e4",
            fontSize: "16px",
            paddingLeft: "4px",
          }}
        >
          iPad Mini Record
        </p>
        {renderTable()}
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#fff",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <p
          style={{
            borderBottom: "1px solid #e4e4e4",
            fontSize: "16px",
            paddingLeft: "4px",
          }}
        >
          iPad Record
        </p>
        {renderTable()}
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#fff",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <p
          style={{
            borderBottom: "1px solid #e4e4e4",
            fontSize: "16px",
            paddingLeft: "4px",
          }}
        >
          Android Record
        </p>
        {renderTable()}
      </div>
    </div>
  );
}
