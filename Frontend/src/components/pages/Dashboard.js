import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ProductCard from './dashboard/ProductCard';
import Header from "../Header_SignedIn";
import Alerto from './Alerto';
import Header3 from '../Header3';
import Cart from "./dashboard/Cart"
import Context from "./dashboard/reducer/Context";


const drawerWidth = 350;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

export default function Dashboard({}) {
  const context = useContext(Context);


  const products = context.products.map(product => {
    return (
      <div>
        <ProductCard
          key={product.id}
          addProductToCart={context.addProductToCart}
          calcTotalPrice={context.calcTotalPrice}
          {...product}
        />
      </div>
    )
  })

  return (
    <ThemeProvider theme={mdTheme}>
      {/* <Header /> */}
      <Header3/>
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
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Grid style={{ padding: 20, paddingBottom: 80 }}>
            <Grid container spacing={1}>
              {products}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Drawer variant="permanent" open={true}>
            <Divider />
            <List component="nav" style={{ position: "fixed" }}>
              <Cart
                carts={context.carts}
                newTotal={context.newTotal}
                addProductToCart={context.addProductToCart}
                removeProductFromCart={context.removeProductFromCart}
                deleteProductFromCart={context.deleteProductFromCart}
                calcTotalPrice={context.calcTotalPrice}
                clearCart={context.clearCart}
              />
            </List>
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}