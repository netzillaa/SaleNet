import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
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
import data from './dashboard/data'
import Cart from './dashboard/Cart';
import Header from "../Header_SignedIn";

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

function DashboardContent() {
  useEffect(() => {
    getproduct();
  }, []);

  const [products, setProduct] = useState([]);

  const getproduct = async () => {
      await axios.get("http://localhost:4000/products/allProducts").then(res => {
        setProduct(res.data.productsData)
      }).catch(err=>{
        console.log(err);
      })
    }

  const cards = products.map(product => {
      return (
        <div>
          <ProductCard
            key={product._id}
            {...product}
          />
        </div>
      )
    })
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
      <ThemeProvider theme={mdTheme}>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          {/* <Drawer variant="permanent" open={open}>
          <Divider />
          <List component="nav" style={{ position: "fixed" }}>
            <Cart />
          </List>
        </Drawer> */}
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
                {cards}
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Drawer variant="permanent" open={open}>
              <Divider />
              <List component="nav" style={{ position: "fixed" }}>
                <Cart />
              </List>
            </Drawer>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  export default function Dashboard() {
    return <DashboardContent />;
  }