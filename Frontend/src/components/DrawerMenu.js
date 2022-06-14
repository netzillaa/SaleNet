import React from 'react';
import { Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const styles = {
    link: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.8rem',
        fontWeight: 'bold'
    },

    listTitle: {
        fontSize:'1.5rem', 
        paddingLeft:'16px', 
        marginBottom:'0px'
    }
};

var id = localStorage.getItem('userId');

const general = [
    { name: 'Dashboard', link: '/dashboard', icon: <DashboardIcon/> },
    { name: 'Transactions', link: '/transactions', icon: <ReceiptLongIcon/> },
];

const settings = [
    { name: 'Manage Product', link: '/manageProduct', icon: <InventoryIcon/> },
    { name: 'Edit Profile', link: '/editProfile?id='+ id, icon: <InventoryIcon/> },
    { name: 'Edit Shop Details', link: '/editShop?id='+ id, icon: <InventoryIcon/> },
]

export default class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpened: false,
        };
    }
    toggleDrawerStatus = () => {
        this.setState({
            isDrawerOpened: true,
        })
    }
    closeDrawer = () => {
        this.setState({
            isDrawerOpened: false,
        })
    }


    render() {
        const { isDrawerOpened } = this.state;
        return (
            <div>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={this.toggleDrawerStatus}
                    style={{ marginRight: '1.5vw', marginLeft: '10px' }}
                >
                    {!isDrawerOpened ? <MenuIcon fontSize="3rem" /> : null}
                </IconButton>
                
                <SwipeableDrawer
                    variant="temporary"
                    open={isDrawerOpened}
                    onClose={this.closeDrawer}
                >
                    <Box
                        sx={{ width: 280 }}
                        role="presentation"
                        open={isDrawerOpened}
                        onClose={this.closeDrawer}
                    >
                        <Box height="180px"
                             backgroundColor="#020267" 
                             color="white" 
                             fontSize="30px" 
                             display="flex"
                             justifyContent="center"
                             alignItems="center"
                             fontWeight="bolder">
                            SALENET POS
                        </Box>
                        <List>
                            {general.map((page) => (
                                <ListItem button 
                                          key={page}
                                          component={NavLink} to={page.link} exact activeStyle={{ color: 'blue' }}>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText><span style={styles.link}>{page.name}</span></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <p style={styles.listTitle}>Management</p>
                        <List>
                            {settings.map((page) => (
                                <ListItem button 
                                          key={page}
                                          component={NavLink} to={page.link} exact activeStyle={{ color: 'blue' }}>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText><span style={styles.link}>{page.name}</span></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText><span style={styles.link}>{text}</span></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText><span style={styles.link}>{text}</span></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </SwipeableDrawer>
            </div>
        );
    }
}
