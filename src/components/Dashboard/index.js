import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import Loader  from "../Loader";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  limitStyle: {
    width: "20%",
    textAlign: "left",
    margin: "0 5px !important",
    "&.MuiFormControl-root .MuiOutlinedInput-root .MuiSelect-select": {
      padding: "6px 12px",
    },
  },
  inputText: {
    margin: "0 5px !important",
    "&.MuiFormControl-root .MuiOutlinedInput-root .MuiOutlinedInput-input": {
      padding: "6px 12px",
    },
  },
  btnsss: {
    border: "1px solid #e7eaec !important",
    background: "#fff !important",
    color: "#676a6c !important",
    boxShadow: "none !important",
    textTransform: "none",
    padding: "6px 8px",
    fontSize: "12px",
    "&:hover": {
      background: "#fff",
      boxShadow: "none !important",
    },
  },
}));

export default function BasicTable() {
  const classes = useStyles();
  const [showLimit, setShowLimit] = useState(25);
  const [isLoading,setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean&encode=base64`)
      .then(response => {
        setTimeout(() => {
          setIsloading(false)
        }, 1000);
        console.log(response,'ressssssssss')
      })
      .catch(error => {
        setIsloading(false)
        console.log(error,'ressssssssss')
      });
}, [])

  const handleChangeLimit = (event) => {
    setShowLimit(event.target.value);
  };

  const tableHeader = [
    "Guide",
    "First Name",
    "Test Version",
    "Belived Impaired",
    "Full Attention",
    "Test Start Time",
    "Classic (/6)Score",
    "GST (/12)Score",
    "Z_TAP_ART",
    "Z_TAPED_AED",
    "Z_EST_ART",
    "Z_EST_TIM",
    "Z_FOL_PNT",
    "Z_EST_AED",
    "Z_BAL_LLD",
    "Z_BAL_RLD",
    "Z_TAP_PWS",
    "Z_FOL_AED",
    "Z_FOL_ERRCT",
    "TAP_ART",
    "EST_ART",
    "EST_TIM",
    "FOL_COS",
    "BAL_DIS",
    "BAL_LLD",
    "BAL_RLD",
    "BAL_LeftAverage",
    "BAL_RightAverage",
    "BAL_TotalAverage",
    "TAP_Sum_of_React_Time",
    "TAP_Sum_ of Error Distance",
    "TAP_Total_Shapes_Shown",
    "TAP_Total_Target_Shapes",
    "TAP_WSC",
    "TAP_Sum_of_Reaction_Time",
    "EST_Sum_of_Error_Distance",
    "EST_Total_Circles_Shown",
    "FOL_Total_Squares_Shown",
    "FOL_Square_Count_Error",
    "TAP_AED",
    "TAP_TTC",
    "TAP_CTC",
    "TAP_PWS",
    "FOL_CSE",
    "FOL_PNT",
    "FOL_AED",
    "FOL_TD",
    "FOL_TOT",
    "FOL_TDIS",
    "EST_TEC",
    "EST_TEE",
    "EST_AED",
    "EST_AED",
    "EST_TSC",
    "EST_TTC",
    "Tap Task Detail",
    "Follow Task Detail",
    "Estimate Task Detail",
    "Balance Task Detail",
    "Get Json Data",
  ];
  let products = [
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
      detailButton: "Button1",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
      detailButton: "Button1",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
    },
    {
      guide: "Revamped813F8050-1940-407E-9478-6765CFA4776D",
      fname: "Jhon",
      testVersion: "Classic",
      believedImpaired: "Classic",
      fullAttention: "True",
      testStart: "2021-08-10 10:08:54 +0000",
      classicScore: "68.22",
      gsTScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      classicScore: "68.22",
      detailButton: "Button",
    },
  ];

  return (
    <div>
        <Loader isloading={isLoading} />

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
          Data Tables
        </p>
        <p style={{ marginTop: "-20px", fontSize: "15px", color: "#676A6C" }}>
          Dashboard
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          marginBottom: "30px",
          marginTop: "30px",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingLeft: "10px",
          flexDirection:'row',
          flexWrap:'wrap'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#676A6C",
            fontWeight: "100",
          }}
        >
          {" "}
          GST Record
        </div>
        <div
          style={{
            display: "flex",
            // width: "20%",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#1ab394",
              height: "35px",
              width: "120px",
              color: "#fff",
            }}
          >
            Get JSON
          </Button>
          <Button
            style={{
              backgroundColor: "#1ab394",
              height: "35px",
              width: "120px",
              marginLeft: 10,
              color: "#fff",
            }}
          >
            Get Excel
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <div style={{ margin: "12px 10px 10px" }}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" style={{ fontSize: "13px" }}>
                  Show
                </Typography>
                <FormControl className={classes.limitStyle}>
                  <Select value={showLimit} onChange={handleChangeLimit}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={500}>500</MenuItem>
                    <MenuItem value={1000}>1000</MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="body2" style={{ fontSize: "13px" }}>
                  Entries
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" style={{ fontSize: "13px" }}>
                  Search:
                </Typography>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  className={classes.inputText}
                />
                <Button
                  size="small"
                  variant="contained"
                  className={classes.btnsss}
                >
                  CSV
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  className={classes.btnsss}
                >
                  Print
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Table style={{ minWidth: 960 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((val) => (
                <TableCell align="center">{val}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ minWidth: "150px" }} align="center">
                  {row.guide}
                </TableCell>
                <TableCell align="center">{row.fname}</TableCell>
                <TableCell align="center">{row.testVersion}</TableCell>
                <TableCell align="center">{row.believedImpaired}</TableCell>
                <TableCell align="center">{row.fullAttention}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.testStart}</TableCell>
                <TableCell align="center">{row.gsTScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center">{row.classicScore}</TableCell>
                <TableCell align="center" style={{ minWidth: "130px" }}>
                  <Button
                    style={{
                      height: "30px",
                      backgroundColor: "#1ab394",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                  >
                    Get JSON
                  </Button>
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
                    Get JSON
                  </Button>
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
                    Get JSON
                  </Button>
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
                    Get JSON
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
