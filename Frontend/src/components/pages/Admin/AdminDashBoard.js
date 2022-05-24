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
import Divider from '@mui/material/Divider';
import Header3 from '../../Header3';

import Paper from '@mui/material/Paper';
// import { LatestOrders } from '../components/dashboard/latest-orders';
// import { LatestProducts } from '../components/dashboard/latest-products';
// import { Sales } from '../components/dashboard/sales';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
import { Sales } from './Sales';
import SideBar from './SideBar';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';




const theme = createTheme();

const headCells = [
    {
        id: 'username',
        numeric: true,
        disablePadding: false,
        label: 'Username',
    },
    {
        id: 'shopname',
        numeric: true,
        disablePadding: false,
        label: 'Shopname',
    },
];

const AdminDashboard = () => {
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
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
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
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}>

                                    <TableCell style={{ fontSize: "180%" }}>Users</TableCell>
                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            padding={headCell.disablePadding ? 'none' : 'normal'}
                                            style={{ fontSize: "180%", fontWeight: "bold" }}
                                        >

                                        </TableCell>))}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );

}
export default AdminDashboard;
