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
  {
    name: 'Dashboard',
    link: '/dashboard'
  }
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

  function mouseOver(event) {
    event.target.style.color = 'dodgerblue';
    event.target.style.cursor = 'pointer';
  }

  function mouseOut(event) {
    event.target.style.color = '#000193';
  }

  function pageHover(event) {
    event.target.style.borderBottom = '4px #454eca solid';
  }

  function pageOut(event) {
    event.target.style.borderBottom = '';
  }

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
                sx={{ my: 3, color: 'black', display: 'block' }}
                style={{ fontSize: '1.5rem' }}
                onMouseOver={pageHover}
                onMouseOut={pageOut}
                component={NavLink} to={page.link} exact activeStyle={{ color: 'blue' }}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography style={{ fontWeight: 'bold', fontSize: '1.7rem', color: 'black' }}>Get Started</Typography>
                <ArrowDropDownRoundedIcon style={{ fontSize: '4rem', color: 'black' }} />
              </IconButton>
            </Tooltip>
            &nbsp;
            <Button component={NavLink} to="/support">
              <HelpRoundedIcon style={{ fontSize: '4rem', color: '#000193', }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut} />
            </Button>
            <Button variant="outlined" color="error" onClick={() => {
              localStorage.removeItem("user-info");
              history.push('/');
            }}>
              Logout
            </Button>
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