import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import DrawerMenu from './DrawerMenu';
import DateTime from './DateTime';

const Header3 = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
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

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <NotificationsIcon />
                </IconButton>
                <p style={{ fontSize: '1.7rem', marginBottom: 0 }}>Notification</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p style={{ fontSize: '1.7rem', marginBottom: 0 }}>Account</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <LogoutIcon />
                </IconButton>
                <p style={{ fontSize: '1.7rem', marginBottom: 0 }}>Logout</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor:'white', position:"sticky", marginBottom:'0px', boxShadow:'0 0 17px 0 rgb(183, 183, 183)', color:'black'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters style={{height:'30px'}}>
                        <DrawerMenu />
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={{ color: '#000193', fontWeight: 'bolder'}}
                        >
                            SALENET
                        </Typography>

                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            style={{ color: '#000193', fontWeight: 'bolder'}}
                        >
                            SALENET
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}/>

                        <DateTime />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title={<span style={{ fontSize: "1rem" }}>Customer Support</span>}>
                                <IconButton component={NavLink} to="/support">
                                    <HelpRoundedIcon sx={{ fontSize: '3rem', color: '#000193','&:hover': {
                            color: "dodgerblue"} }} />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <NotificationsIcon style={{ fontSize: '3rem', color: '#000193' }} />
                            </IconButton>
                            <Tooltip title={<span style={{ fontSize: "1rem" }}>Account</span>}>
                            <IconButton
                                size="large"
                                aria-controls={menuId}
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle sx={{ fontSize: '3rem', color: '#000193','&:hover': {
                            color: "dodgerblue"} }} />
                            </IconButton>
                            </Tooltip>
                            <Tooltip title={<span style={{ fontSize: "1rem" }}>Logout</span>}>
                                <IconButton size="large" color="inherit" onClick={() => {
                            localStorage.removeItem("userInfo");
                            history.push('/');}}>
                                    <LogoutIcon style={{ fontSize: '3rem' }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon style={{ fontSize: '2.5rem' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};
export default Header3;