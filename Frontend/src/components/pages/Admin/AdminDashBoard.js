// import Head from 'next/head';
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Shops } from './Shops';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Header3 from '../../Header3';
import ManageUserPage from './manageUserPage';
// import { LatestOrders } from '../components/dashboard/latest-orders';
// import { LatestProducts } from '../components/dashboard/latest-products';
// import { Sales } from './Sales';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
import '../../../css/AdminDashboard.css';
// import Deposits from './totalUser';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TextareaAutosize from '@mui/base/TextareaAutosize';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'white',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

function createData(shopname, sales, xx, yy, zz) {
    return { shopname, sales, xx, yy, zz };
}

const rows = [
    createData('', ''),
    createData('', ''),
    createData('', ''),
    createData('', ''),
];

const theme = createTheme();

// const headCells = [
//     {
//         id: 'username',
//         numeric: true,
//         disablePadding: false,
//         label: 'Username',
//     },
//     {
//         id: 'shopname',
//         numeric: true,
//         disablePadding: false,
//         label: 'Shopname',
//     },
// ];

const AdminDashboard = () => {

    const userInfo = localStorage.getItem("userInfo");

    function parseJwt(token) {
        try{

            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }catch(err){
            window.location.href = "http://localhost:3000/403";
        }

        return JSON.parse(jsonPayload).shop;
    }

    const owner = parseJwt(userInfo);


    return (
        <ThemeProvider theme={theme}>
            <Header3 />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mb: 5 }}>
                        <Grid container spacing={2}>
                            <Grid className="top-left" item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Typography
                                        sx={{ flex: '3' }}
                                        variant="h6"
                                        id="tableTitle"
                                        component="div"
                                        fontSize="200%"
                                        color="#000193"
                                    >
                                        Sales report
                                    </Typography>
                                    <TableContainer >
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>Shopname</StyledTableCell>
                                                    <StyledTableCell >Total Sale</StyledTableCell>
                                                    <StyledTableCell >xx&nbsp;(RM)</StyledTableCell>
                                                    <StyledTableCell >yy&nbsp;(RM)</StyledTableCell>
                                                    <StyledTableCell >zz&nbsp;(RM)</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.shopname}</TableCell>
                                                        <TableCell align="right">{row.sale}</TableCell>
                                                        <TableCell align="right">{row.xx}</TableCell>
                                                        <TableCell align="right">{row.yy}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                   <Typography
                                        sx={{ flex: '5' }}
                                        variant="h6"
                                        id="userTotal"
                                        component="div"
                                        fontSize="200%"
                                        color="#000193"
                                    >
                                        Total number of users
                                    </Typography>

                                    <TextareaAutosize
                                        maxRows={4}
                                        aria-label="maximum height"
                                        placeholder="xx"
                                        style={{ width: 250, height:200 }}
                                    />

                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                {/* <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 520,
                                        width: '100%',
                                    }}> */}

                                {/* <TableCell style={{ fontSize: "180%" }}>Users</TableCell>
                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            padding={headCell.disablePadding ? 'none' : 'normal'}
                                            style={{ fontSize: "180%", fontWeight: "bold" }}
                                        > */}
                                <ManageUserPage />


                                {/* </TableCell>))} */}
                                {/* </Paper> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );

}
export default AdminDashboard;
