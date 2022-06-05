import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { NavLink } from "react-router-dom";
import { useHistory, Link } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    link: '/home'
  },
  {
    name: 'Explore',
    link: '/explore'
  },
  {
    name: 'Follow Us',
    link: '/follow'
  }
];

const settings = [
  {
    name: 'Register',
    link: '/register'
  },
  {
    name: 'Login',
    link: '/signin'
  },
];
const Header2 = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: 'white', position: "sticky", marginBottom: '0px', boxShadow: '0 0 17px 0 rgb(183, 183, 183)', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            style={{ color: '#000193', fontWeight: 'bolder' }}
          >
            SALENET
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}
                  onClick={handleCloseNavMenu}
                  style={{ color: 'black' }}
                  component={NavLink} to={page.link} exact activeStyle={{ color: 'blue' }}>
                  <Typography textAlign="center" style={{ fontSize: '1.7rem' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            style={{ color: '#000193', fontWeight: 'bolder' }}
          >
            SALENET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: 'black', display: 'block', '&:hover':{
                  borderBottom:'4px #454eca solid'
                } }}
                style={{ fontSize: '1.5rem' }}
                component={NavLink} to={page.link} exact activeStyle={{ color: 'blue' }}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={<span style={{fontSize: "1rem"}}>Open options</span>}>
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'black' }}>Get Started</Typography>
                <ArrowDropDownRoundedIcon style={{ fontSize: '4rem', color: 'black' }} />
              </Button>
            </Tooltip>
            &nbsp;
            <Tooltip title={<span style={{fontSize: "1rem"}}>Customer Support</span>}>
            <IconButton component={NavLink} to="/support">
              <HelpRoundedIcon sx={{ fontSize: '4rem', color: '#000193', '&:hover': {
                            color: "dodgerblue"}}}/>
            </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}
                  onClick={handleCloseUserMenu}
                  component={NavLink} to={setting.link}>
                  <Typography textAlign="center" style={{ fontSize: '1.7rem', color: 'black' }}>
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;