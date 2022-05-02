// import Head from 'next/head';
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Shops } from './Shops';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import { LatestOrders } from '../components/dashboard/latest-orders';
// import { LatestProducts } from '../components/dashboard/latest-products';
// import { Sales } from '../components/dashboard/sales';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
import { Sales } from './Sales';
import SideBar from './SideBar';



const AdminDashboard = () => (
    <>
        {/* <Head> */}
        <title>
            Dashboard | SALENET
        </title>
        {/* </Head> */}
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 10
            }}
        >
            <SideBar />

        </Box>
    </>
);

export default AdminDashboard;
